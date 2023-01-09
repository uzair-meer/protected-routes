import { createContext, useState } from "react";

const AuthContext = createContext({
  isLogIn: false,
  logIn: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const logInHandler = () => {
    setUser(true);
  };
  const logOutHandler = () => {
    setUser(false);
  };
  const ContextValue = {
    isLogIn: user,
    logIn: logInHandler,
    logout: logOutHandler,
  };
  return (
    <>
      <AuthContext.Provider value={ContextValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthContext;
