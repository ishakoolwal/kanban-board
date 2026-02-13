import { useBoard } from "../contexts/BoardContext";
import { useState } from "react";

export default function Column({ title, type }) {

  const { tasks, addTask, moveTask, deleteTask } = useBoard();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
  <div className="bg-white p-4 rounded-xl shadow-md border">

    <h2 className="font-semibold text-lg mb-4">{title}</h2>

    {type === "todo" && (
      <div className="mb-4">
        <input
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 transition text-white w-full mt-2 py-2 rounded-lg"
        >
          Add Task
        </button>
      </div>
    )}

    <div className="space-y-3">
      {tasks[type].map(task => (
        <div
          key={task.id}
          className="bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <p className="font-medium">{task.title}</p>

          <div className="flex justify-between mt-3 text-sm">

            {type !== "todo" && (
              <button
                onClick={() =>
                  moveTask(task, type, type === "inprogress" ? "todo" : "inprogress")
                }
                className="text-blue-500 hover:underline"
              >
                ← Move
              </button>
            )}

            {type !== "done" && (
              <button
                onClick={() =>
                  moveTask(task, type, type === "todo" ? "inprogress" : "done")
                }
                className="text-blue-500 hover:underline"
              >
                Move →
              </button>
            )}

            <button
              onClick={() => deleteTask(task, type)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>

          </div>
        </div>
      ))}
    </div>

  </div>
);

}
