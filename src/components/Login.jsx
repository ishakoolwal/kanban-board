import { useState } from "react";

export default function Login({ setUser }) {

  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name.trim()) return;

    localStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6 shadow rounded w-64">

        <input
          className="border p-2 w-full mb-4"
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}
