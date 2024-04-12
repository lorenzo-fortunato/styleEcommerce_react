import React, { useState } from "react";

const Login = ({ setToken }: { setToken: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const clearLogin = () => {
    setUsername("");
    setPassword("");
  };

  async function loginUser(credentials: any) {
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const token = await loginUser({
        username,
        password,
      });
      setToken(token);
      setIsPending(true);
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
      setIsWrongCredentials(true);
      setIsPending(false);
      clearLogin();
    }
  };

  return (
      <form onSubmit={handleSubmit} className="formLogin">
        <h2 className="titleLogin">Style E-Commerce!</h2>
        <input
          className={isWrongCredentials ? "inputLogin wrongCredentials" : "inputLogin"}
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)} />
        <input
          className={isWrongCredentials ? "inputLogin wrongCredentials" : "inputLogin"}
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        {isWrongCredentials && (
          <div>Wrong credentials, please retry with others...</div>
        )}
        {!isPending ? (
          <button className="btnLogin">Login</button>
        ) : (
          <button disabled>Logging in...</button>
        )}
      </form>
  );
};

export default Login;
