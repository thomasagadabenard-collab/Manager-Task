import { useState, useEffect } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(""); 
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingId) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingId
            ? { ...task, title, project, status, priority, dueDate }
            : task
        )
      );
    } else {
      setTasks((prev) => [
        {
          id: Date.now(),
          title,
          project,
          status,
          priority,
          dueDate, 
        },
        ...prev,
      ]);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setProject("");
    setStatus("todo");
    setPriority("medium");
    setDueDate("");
    setEditingId(null);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setProject(task.project);
    setStatus(task.status);
    setPriority(task.priority);
    setDueDate(task.dueDate || "");
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="tasks-page">
      {/* Header */}
      <div className="tasks-header">
        <div>
          <h1>Tasks</h1>
          <p>View and manage all your tasks</p>
        </div>
      </div>

      {/* Filters */}
      <div className="tasks-filters">
        {["all", "todo", "in progress", "done"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Add / Edit Form */}
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />

        {/* ✅ date input */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
        </select>

        <button type="submit">
          {editingId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* Task List */}
      <div className="tasks-list">
        {filteredTasks.length === 0 && <p>No tasks yet</p>}

        {filteredTasks.map((task) => (
          <div key={task.id} className="task-row">
            <div className="task-main">
              <h4>{task.title}</h4>
              <span className="project">{task.project}</span>
            </div>

            <span className={`badge status ${task.status.replace(" ", "-")}`}>
              {task.status}
            </span>

            <span className={`badge priority ${task.priority}`}>
              {task.priority}
            </span>

            <span className="due-date">{task.dueDate}</span>

            <div className="actions">
              <button onClick={() => startEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;