import React, { useState, useContext } from 'react';
import * as dataUtils from '../utils/dataUtils';

const DataContext = React.createContext();

export function DataProvider({ children }) {
  const [enums, setEnums] = useState({
    data: [],
    total: 0
  });
  const [posts, setPosts] = useState({
    data: [],
    total: 0
  });
  const [events, setEvents] = useState({
    data: [],
    total: 0
  });

  async function getEnums(filters, sort, page) {
    const data = await dataUtils.getEnums(filters, sort, page);
    setEnums(data);
  }

  async function getPosts(filters, sort, page) {
    const data = await dataUtils.getPosts(filters, sort, page);
    setPosts(data);
  }

  async function getEvents(filters, sort, page) {
    const data = await dataUtils.getEvents(filters, sort, page);
    setEvents(data);
  }

  return (
    <DataContext.Provider
      value={{
        enums,
        getEnums,
        addEnum: dataUtils.addEnum,
        editEnum: dataUtils.editEnum,
        deleteEnum: dataUtils.deleteEnum,
        posts,
        getPosts,
        addPost: dataUtils.addPost,
        editPost: dataUtils.editPost,
        deletePost: dataUtils.deletePost,
        events,
        getEvents,
        addEvent: dataUtils.addEvent,
        editEvent: dataUtils.editEvent,
        deleteEvent: dataUtils.deleteEvent
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function withData(WrappedComponent) {
  function Component(props) {
    return (
      <DataContext.Consumer>
        {(data) => <WrappedComponent {...props} data={data} />}
      </DataContext.Consumer>
    );
  }

  return Component;
}

export function useData() {
  return useContext(DataContext);
}
