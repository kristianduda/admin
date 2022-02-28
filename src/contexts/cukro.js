import React, { useState, useContext } from 'react';
import * as cukroUtils from '../utils/cukroUtils';

const CukroContext = React.createContext();

export function CukroProvider({ children }) {
  const [products, setProducts] = useState({
    data: [],
    total: 0
  });

  const [categoryList, setCategoryList] = useState({
    data: [],
    total: 0
  });

  async function getProducts(filters, sort, page) {
    const data = await cukroUtils.getProducts(filters, sort, page);
    setProducts(data);
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
        categoryList,
        getProducts,
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
