import { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="calendar-page">
      {/* Header */}
      <div className="calendar-header">
        <div>
          <h1>Calendar</h1>
          <p>View and manage your tasks and deadlines</p>
        </div>
        <button className="add-event-btn">+ Add Event</button>
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
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="days-grid">
            {days.map((day, index) => (
              <div key={index} className="day-cell">
                {day && <span>{day}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="upcoming-card">
          <h3>Upcoming Tasks</h3>

          <div className="task-item">
            <div>
              <h4>Design homepage mockups</h4>
              <p>Create high-fidelity mockups for the new homepage</p>
            </div>
            <span className="badge high">high</span>
          </div>

          <div className="task-item">
            <div>
              <h4>Implement responsive navigation</h4>
              <p>Build mobile-responsive navigation component</p>
            </div>
            <span className="badge in-progress">in progress</span>
          </div>

          <div className="task-item">
            <div>
              <h4>Set up CI/CD pipeline</h4>
              <p>Configure automated testing and deployment</p>
            </div>
            <span className="badge medium">medium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar; 