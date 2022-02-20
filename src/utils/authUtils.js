import { auth as a } from "kd-web";

export const auth = (username, password) => {
  return a.auth(username, password);
};

export const updateUser = async (data) => {
  return a.updateUser(data._id, data);
};