import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT } from "../routes/router";
import { BASE_URL } from "../constants";
import { userContext } from "../context/user.context";

export const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(userContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    clearInputs();
    if (response.status === 200) {
      setUserInfo(response.data);
      navigate(ROOT);
    }
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
