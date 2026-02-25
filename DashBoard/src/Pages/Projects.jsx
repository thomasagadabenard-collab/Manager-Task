
import "./Project.css";

const Projects = () => {
  const projects = [
    {
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
    },

    {
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
    },

    {
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
    },
  ];

  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <div>
          <h1>Projects</h1>
          <p>Manage and track all your projects in one place</p>
        </div>

        <button className="new-project-btn">+ New Project</button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Card Header */}
            <div className="card-header">
              <h3>{project.title}</h3>
              
            </div>

            {/* Status */}
            <span className={`status ${project.status}`}>
              {project.status}
            </span>

            {/* Description */}
            <p className="description">{project.description}</p>

            {/* Progress */}
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

            {/* Footer */}
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