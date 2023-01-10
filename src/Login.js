import { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState(null);

  const submitHandler = (e) => {
    const sendReq = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();

      setToken(data.token);
      localStorage.setItem("token", data.token);
      console.log(data);
    };
    sendReq();
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h2> Valid Usernames and Passwords</h2>
        <ul>
          <li>"username":"atuny0","password":"9uQFF1Lh"</li>
          <li>"username":"dpettegre6","password":"YVmhktgYVS"</li>
          <li>"username":"rshawe2","password":"OWsTbMUgFc"</li>
        </ul>
      </div>
      <form action="" method="post" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {token && <div>Token : {token}</div>}
    </>
  );
};

export default LogIn;
