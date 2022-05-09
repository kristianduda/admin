import { store } from 'extropy.js';

const collection = 'enums';

export const getEnums = (filters, sort, page) =>
  store.get(collection, filters, sort, page);

export const addEnum = (data) => store.post(collection, data);

export const editEnum = (data) => store.put(collection, data, data._id);

export const deleteEnum = (id) => store.delById(collection, id);
