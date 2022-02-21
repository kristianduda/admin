import { auth as a } from "kd-web";

export const auth = (username, password) => {
  return a.auth(username, password);
};

export const updateUser = (data) => {
  return a.updateUser(data._id, data);
};

export const getUsers = (filters, sort, page, search) => {
  return a.getUsers(filters, sort, page, search);
}