import React, { useState, useContext } from "react";
import * as authUtils from "../utils/authUtils";
import { storage } from "kd-web";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.getUser());
  const [alert, setAlert] = useState({ isOpen: false });

  const auth = async (username, password) => {
    try {
      const u = await authUtils.auth(username, password);
      if(u) {
        setUser(u);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const updateUser = async (data) => {
    try {
      const u = await authUtils.updateUser(data);
      setUser(u);
    } catch (error) {
      console.error(error)
    }
  };

  const showAlert = (msg, severity = 'info') => {
    setAlert({ msg, severity, isOpen: true });
  }

  const hideAlert = () => {
    setAlert({ isOpen: false });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        auth,
        alert,
        showAlert,
        hideAlert,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function withAuth(WrappedComponent) {
  function Component(props) {
    return (
      <AuthContext.Consumer>
        {(auth) => <WrappedComponent {...props} auth={auth} />}
      </AuthContext.Consumer>
    );
  }

  return Component;
}

export function useAuth() {
  return useContext(AuthContext);
}
