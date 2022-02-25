import { ajax } from 'kd-web';

const buildUrl = (path) => {
  return `https://localhost:44388/api/${path}`;
};

export const getProducts = (filters, sort, page) => {
  const url = buildUrl('product');
  return ajax.get(url, filters, sort, page);
};

export const addProduct = (data) => {
  const url = buildUrl('product');
  ajax.post(url, data);
};

export const editProduct = (data, id) => {
  const url = buildUrl('product');
  ajax.put(`${url}/${id}`, data);
};

export const deleteProduct = (id) => {
  const url = buildUrl('product');
  ajax.delById(`${url}/${id}`);
};

export const getCategory = (filters, sort, page) => {
  const url = buildUrl('category');
  return ajax.get(url, filters, sort, page);
};
