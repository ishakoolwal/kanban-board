import { createContext, useContext, useState } from "react";
import { mockApi } from "../utils/mockApi";
import toast from "react-hot-toast";

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {

  const [tasks, setTasks] = useState({
    todo: [],
    inprogress: [],
    done: []
  });

  
  const addTask = async (title) => {

    const newTask = { id: Date.now(), title };

    const previousState = tasks;

    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask]
    });

    try {
      await mockApi();
    } catch (error) {
      toast.error("Failed to add task");
      setTasks(previousState); 
    }
  };


  const moveTask = async (task, from, to) => {

    const previousState = tasks;

    const updatedState = {
      ...tasks,
      [from]: tasks[from].filter(t => t.id !== task.id),
      [to]: [...tasks[to], task]
    };

    setTasks(updatedState);

    try {
      await mockApi();
    } catch (error) {
      toast.error("Failed to move task");
      setTasks(previousState);
    }
  };


  const deleteTask = async (task, column) => {

    const previousState = tasks;

    setTasks({
      ...tasks,
      [column]: tasks[column].filter(t => t.id !== task.id)
    });

    try {
      await mockApi();
    } catch (error) {
      toast.error("Failed to delete task");
      setTasks(previousState);
    }
  };

  return (
    <BoardContext.Provider value={{ tasks, addTask, moveTask, deleteTask }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
