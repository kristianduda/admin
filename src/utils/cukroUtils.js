import { ajax } from 'kd-web';

export const getProducts = (filters, sort, page) => {
  return ajax.get('https://localhost:44301/api/product', filters, sort, page);
};

export const addProduct = (data) => {
  ajax.post('https://localhost:44301/api/product', data);
};

export const editProduct = (data, id) => {
  ajax.put(`https://localhost:44301/api/product/${id}`, data);
};

export const deleteProduct = (id) => {
  ajax.delById(`https://localhost:44301/api/product/${id}`);
};

export const getCategory = (filters, sort, page) => {
  return ajax.get('https://localhost:44301/api/category', filters, sort, page);
};
