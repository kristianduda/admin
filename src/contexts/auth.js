import React, { useState, useContext } from "react";
import * as authUtils from "../utils/authUtils";
import { storage } from "kd-web";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.getUser());

  const auth = async (username, password) => {
    try {
      const u = await authUtils.auth(username, password);
      setUser(u);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        auth
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
