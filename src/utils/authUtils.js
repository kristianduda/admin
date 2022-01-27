import { auth as a } from "kd-web";

export const auth = async (username, password) => {
  return await a.auth(username, password);
};