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
  const req = {
    categoryRefs: [{ id: data.categoryId }],
    name: data.name,
    weight: data.weight,
    variants: { flavour: data.flavour, shape: data.shape },
    price: data.price,
    materials: data.materials
  };
  ajax.post(url, req);
};

export const editProduct = (data, id) => {
  const url = buildUrl('product');
  ajax.put(`${url}/${id}`, data);
};

export const deleteProduct = (id) => {
  const url = buildUrl('product');
  ajax.delById(`${url}/${id}`);
};

export const getCategoryList = async (filters, sort, page) => {
  const url = buildUrl('category');
  const res = await ajax.get(url, filters, sort, page);
  const data = res.data.map((x) => {
    return {
      categoryId: x._id,
      name: x.name
    };
  });
  return {
    data: data,
    total: res.total
  };
};
