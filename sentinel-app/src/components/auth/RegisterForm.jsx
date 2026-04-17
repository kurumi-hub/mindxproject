import React, { useState } from "react";
import { register } from "../../services/api";

export default function RegisterForm({ setActiveTab }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const data = await register(username, password);

      console.log("REGISTER:", data);

      if (data.message) {
        alert("Register success!");
        setActiveTab("login"); // go back to login
      } else {
        alert("Register failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error");
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
        onClick={handleRegister}
        className="w-full bg-brand-cyan text-black font-bold py-3 rounded hover:bg-brand-cyanHover transition-colors mb-6 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
      >
        REGISTER
      </button>
    </>
  );
}
