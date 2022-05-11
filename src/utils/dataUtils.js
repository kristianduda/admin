import { store } from 'extropy.js';

const enums = 'enums';

export const getEnums = (filters, sort, page) =>
  store.get(enums, filters, sort, page);

export const addEnum = (data) => store.post(enums, data);

export const editEnum = (data) => store.put(enums, data, data._id);

export const deleteEnum = (id) => store.delById(enums, id);

const posts = 'posts';

export const getPosts = (filters, sort, page) =>
  store.get(posts, filters, sort, page);

export const addPost = (data) => store.post(posts, data);

export const editPost = (data) => store.put(posts, data, data._id);

export const deletePost = (id) => store.delById(posts, id);
