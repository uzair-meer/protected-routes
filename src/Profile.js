import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./context";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logOutHandler = () => {
    authCtx.logout();
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <h2>UserProfile</h2>
        <h1>Welcome on Board</h1>
        <div>
          <button
            type="submit"
            className="btn btn-profile"
            onClick={logOutHandler}
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
