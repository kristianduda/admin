import { store } from 'kd-web';

export const getEnums = async (filters, sort, page) => {
  return await store.get('enums', filters, sort, page);
};
