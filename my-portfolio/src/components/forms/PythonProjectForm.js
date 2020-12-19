import React, { useState } from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPythonProject } from '../../actions/pythonProjectActions';

const PythonProjectForm = props => {
  const [python_project, setPythonProject] = useState({
    python_project_image: "",
    python_project_title: "",
    python_project_description: "",
    python_project_github_link: "",
    python_project_live_link: ""
  });

  const handleChange = e => {
    setPythonProject({ ...python_project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addPythonProject(python_project, props);
  };

  return (
    <div className="project-form">
      <div className="project-left-col">
        <img 
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="laptop"
          style={{ borderRadius: "10px 0 0 10px", height: "550px", width: "500px", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }}
        />
      </div>
      <div className="project-right-col">
        <h2>New Python Project</h2>
        {localStorage.getItem('token') ? (
          <form onSubmit={handleSubmit}>

            <div className="project-form-box">
              <input 
              type="text"
              name="python_project_image"
              placeholder="Image URL"
              value={python_project.python_project_image}
              onChange={handleChange}
              />
              <label>Image URL</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="python_project_title"
              placeholder="Project Title"
              value={python_project.python_project_title}
              onChange={handleChange}
              />
              <label>Title</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="python_project_description"
              placeholder="Project Description"
              value={python_project.python_project_description}
              onChange={handleChange}
              />
              <label>Description</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="python_project_github_link"
              placeholder="Github Link"
              value={python_project.python_project_github_link}
              onChange={handleChange}
              />
              <label>Github Link</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="python_project_live_link"
              placeholder="Live Link"
              value={python_project.python_project_live_link}
              onChange={handleChange}
              />
              <label>Live Link</label>
            </div>
          <div className="project-form-button">
            <button type="submit" className="project-button">Add Python Project</button>
            <Link to="/projects" className="project-button cancel-button">Cancel</Link>
          </div>
        </form>
        ) : (
          <div>
            <h4>Only the Admin can add a new Python Project.</h4>
            <Link to="/projects" className="project-button">Return to Projects</Link>
          </div>
        )} 
        </div>
    </div>
    );
  };

const mapStateToProps = state => {
  return {
    python_project_id: state.python_project_id
  };
};

export default connect(mapStateToProps, { addPythonProject })(PythonProjectForm);