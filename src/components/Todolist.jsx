import { useState, useEffect } from "react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    // Load from localStorage on initial render only
    const saved = localStorage.getItem("myTasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: task,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
    }
  };

  const handleDelete = (idToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "5px" }}
      />
      <button
        onClick={handleAdd}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            {task.text}
            <button
              onClick={() => handleDelete(task.id)}
              style={{ marginLeft: "10px", padding: "2px 6px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
