import React, { useState } from 'react';
import { login } from "../../services/api";

const LoginForm = ({ setView }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(username, password);

      console.log("LOGIN RESPONSE:", data);

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        setView("dashboard");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      // console.error(err);
      // alert("Error connecting to server");
        console.error("LOGIN ERROR:", err);
        alert(err.message);
    }
  };

  return (
    <>
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">
            Operator Identity
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username or Email"
            className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-xs text-gray-500 uppercase tracking-wider">
              Access Code
            </label>
            <a href="#" className="text-xs text-brand-cyan">FORGOT?</a>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan"
          />
        </div>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-brand-cyan text-black font-bold py-3 rounded hover:bg-brand-cyanHover transition-colors mb-6 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
      >
        LOGIN
      </button>
    </>
  );
};

export default LoginForm;
