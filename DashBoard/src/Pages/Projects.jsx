import { useState, useEffect } from "react";
import "./Projects.css";
import { useProjects } from "../Context/Projectscontext";

const Projects = () => {
  const [projects, setProjects] = useState([
    /*{
      id: 1,
      title: "Website Redesign",
      description: "Complete overhaul of company website with modern UI/UX",
      status: "active",
      progress: 75,
      dueDate: "3/15/2026",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native iOS and Android app for customer portal",
      status: "active",
      progress: 45,
      dueDate: "4/30/2026",
    },
    {
      id: 3,
      title: "API Integration",
      description: "Integration with third-party payment and analytics APIs",
      status: "active",
      progress: 90,
      dueDate: "3/1/2026",
    },*/
  ]);

  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addProject = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newProject = {
      id: Date.now(), 
      title,
      description,
      status: "active",
      progress: 0,
      dueDate,
    };

    setProjects((prev) => [newProject, ...prev]);

   
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <div>
          <h1>Projects</h1>
          <p>Manage and track all your projects in one place</p>
        </div>
      </div>

      <form className="project-form" onSubmit={addProject}>
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button type="submit" className="add-project">Add Project</button>
      </form>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-header">
              <h3>{project.title}</h3>
            </div>

            <span className={`status ${project.status}`}>
              {project.status}
            </span>

            <p className="description">{project.description}</p>

            <div className="progress-section">
              <div className="progress-label">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="card-footer">
              <span className="date">📅 {project.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;