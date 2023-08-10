import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {}, // placeholder functions
  logout: () => {}, // placeholder functions
});

export function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isAuth, login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// Export the auth context
export default AuthContext;
