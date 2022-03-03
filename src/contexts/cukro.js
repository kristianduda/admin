import React, { useState, useContext } from 'react';
import * as cukroUtils from '../utils/cukroUtils';

const CukroContext = React.createContext();

export function CukroProvider({ children }) {
  const [products, setProducts] = useState({
    data: [],
    total: 0
  });

  const [product, setProduct] = useState({
    categoryId: '',
    name: '',
    weight: '',
    deliveryDate: '',
    hasShape: false,
    flavour: '',
    shape: '',
    price: 0,
    material: '',
    materials: [],
    minimumAmount: 1
  });

  const [categoryList, setCategoryList] = useState({
    data: [],
    total: 0
  });

  async function getProducts(filters, sort, page) {
    const data = await cukroUtils.getProducts(filters, sort, page);
    setProducts(data);
  }

  async function getProduct(id) {
    const data = await cukroUtils.getProduct(id);
    setProduct({
      categoryId: data.categoryRefs[0].id,
      name: data.name,
      weight: data.weight,
      deliveryDate: data.deliveryDate,
      hasShape: data.variants.shape.length > 0,
      flavour: data.variants.flavour,
      shape: data.variants.shape,
      price: data.price,
      material: '',
      materials: data.materials,
      minimumAmount: data.minimumAmount
    });
  }

  async function getCategoryList(filters, sort, page) {
    try {
      const res = await cukroUtils.getCategoryList(filters, sort, page);
      setCategoryList(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CukroContext.Provider
      value={{
        products,
        product,
        categoryList,
        getProducts,
        getProduct,
        setProduct,
        getCategoryList,
        addProduct: cukroUtils.addProduct,
        editProduct: cukroUtils.editProduct,
        deleteProduct: cukroUtils.deleteProduct
      }}
    >
      {children}
    </CukroContext.Provider>
  );
}

export function withData(WrappedComponent) {
  function Component(props) {
    return <CukroContext.Consumer>{(data) => <WrappedComponent {...props} data={data} />}</CukroContext.Consumer>;
  }

  return Component;
}

export function useCukro() {
  return useContext(CukroContext);
}
