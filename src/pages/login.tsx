import { type FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

export const Login: FC = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ username, email });
  };

  useEffect(() => {
    isLoggedIn && navigate("/calculator");
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
