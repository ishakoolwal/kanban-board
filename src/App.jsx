import { useState, useEffect } from "react";
import Login from "./components/Login";
import Board from "./components/Board";
import { BoardProvider } from "./contexts/BoardContext";
import { Toaster } from "react-hot-toast";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(savedUser);
    } else {
      setUser(null);
    }

  }, []);

  return (
    <>
      <Toaster position="top-right" />

      <BoardProvider>
        {user === null ? (
          <Login setUser={setUser} />
        ) : (
          <Board />
        )}
      </BoardProvider>
    </>
  );
}

export default App;
