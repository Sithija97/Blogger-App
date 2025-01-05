import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes/router";
import { BASE_URL } from "../constants";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      username,
      password,
    });
    if (response.status === 201) {
      navigate(LOGIN);
    }
    clearInputs();
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <h1>Register</h1>
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
      <button type="submit">Register</button>
    </form>
  );
};
