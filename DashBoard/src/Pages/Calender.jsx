import { useState, useEffect } from "react";
import './Calender.css'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  /* ---------------- Date Info ---------------- */
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  /* ---------------- Month Navigation ---------------- */
  const prevMonth = () =>
    setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(year, month + 1, 1));

  /* ---------------- Calendar Days ---------------- */
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  /* ---------------- Load Tasks ---------------- */
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  /* ---------------- Helpers ---------------- */
  const tasksForDay = (day) =>
    tasks.filter((task) => {
      if (!task.dueDate) return false;

      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getDate() === day &&
        taskDate.getMonth() === month &&
        taskDate.getFullYear() === year
      );
    });

  const upcomingTasks = tasks
    .filter((task) => task.dueDate)
    .sort(
      (a, b) =>
        new Date(a.dueDate) - new Date(b.dueDate)
    )
    .slice(0, 3);

  /* ---------------- UI ---------------- */
  return (
    <div className="calendar-page">
      {/* Header */}
      <div className="calendar-header">
        <div>
          <h1>Calendar</h1>
          <p>View and manage your tasks and deadlines</p>
        </div>
      </div>

      <div className="calendar-layout">
        {/* Calendar */}
        <div className="calendar-card">
          <div className="calendar-top">
            <h3>
              {monthName} {year}
            </h3>
            <div className="nav-buttons">
              <button onClick={prevMonth}>‹</button>
              <button onClick={nextMonth}>›</button>
            </div>
          </div>

          <div className="weekdays">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day) => (
                <span key={day}>{day}</span>
              )
            )}
          </div>

          <div className="days-grid">
            {days.map((day, index) => (
              <div key={index} className="day-cell">
                {day && (
                  <>
                    <span className="day-number">{day}</span>

                    {tasksForDay(day).map((task) => (
                      <div
                        key={task.id}
                        className={`event ${task.priority}`}
                      >
                        {task.title}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="upcoming-card">
          <h3>Upcoming Tasks</h3>

          {upcomingTasks.length === 0 && (
            <p>No upcoming tasks</p>
          )}

          {upcomingTasks.map((task) => (
            <div key={task.id} className="task-item">
              <div>
                <h4>{task.title}</h4>
                <p>{task.project}</p>
              </div>
              <span className={`badge ${task.priority}`}>
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;