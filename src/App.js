import Login from "./Login";

import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import { useContext } from "react";
import AuthContext from "./context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        {authCtx.isLogIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
