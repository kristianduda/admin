import { auth as a, storage, mail } from 'extropy.js';
import config from '../config.json';
import * as signalR from '@aspnet/signalr';

export const auth = (username, password) => a.auth(username, password);

export const updateUser = (data) => a.updateUser(data._id, data);

export const getUsers = (filters, sort, page, search) =>
  a.getUsers(filters, sort, page, search);

const getToken = () => {
  return storage.getUser().refreshToken;
};

const onConnect = (userId) => {
  console.log('hub_connect', userId);
};

const onDisconnect = (userId) => {
  console.log('hub_disconnect', userId);
};

export const initHub = ({ onNotification }) => {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${config.url.mail}/hub`, { accessTokenFactory: getToken })
    .configureLogging(signalR.LogLevel.Error)
    .build();

  connection.start().catch((err) => {
    console.error('hub', err);
  });

  connection.on('connect', onConnect);
  connection.on('disconnect', onDisconnect);
  if(onNotification) {
    connection.on("notification", onNotification);
  }
}