import React, { useState, useContext } from 'react';
import * as cukroUtils from '../utils/cukroUtils';

const CukroContext = React.createContext();

export function CukroProvider({ children }) {
  const [products, setProducts] = useState({
    data: [],
    total: 0
  });

  const [category, setCategory] = useState({
    data: [],
    total: 0
  });

  async function getProducts(filters, sort, page) {
    const data = await cukroUtils.getProducts(filters, sort, page);
    setProducts(data);
  }

  async function getCategory(filters, sort, page) {
    const res = await cukroUtils.getCategory(filters, sort, page);

    setCategory(res);
  }

  return (
    <CukroContext.Provider
      value={{
        products,
        category,
        getProducts,
        getCategory,
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
