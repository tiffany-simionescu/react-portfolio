import React, { useState } from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSqliteProject } from '../../actions/sqliteProjectActions';

const SqliteProjectForm = props => {
  const [sqlite_project, setSqliteProject] = useState({
    sqlite_project_image: "",
    sqlite_project_title: "",
    sqlite_project_description: "",
    sqlite_project_github_link: "",
    sqlite_project_live_link: ""
  });

  const handleChange = e => {
    setSqliteProject({ ...sqlite_project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSqliteProject(sqlite_project, props);
  };

  return (
    <div className="project-form">
      <div className="project-left-col">
        <img 
          src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=340"
          alt="lake and trees"
          style={{ borderRadius: "10px 0 0 10px", height: "550px", width: "500px", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }}
        />
      </div>
      <div className="project-right-col">
        <h2>New SQLite Project</h2>
        {localStorage.getItem('token') ? (
          <form onSubmit={handleSubmit}>

            <div className="project-form-box">
              <input 
              type="text"
              name="sqlite_project_image"
              placeholder="Image URL"
              value={sqlite_project.sqlite_project_image}
              onChange={handleChange}
              />
              <label>Image URL</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="sqlite_project_title"
              placeholder="Project Title"
              value={sqlite_project.sqlite_project_title}
              onChange={handleChange}
              />
              <label>Title</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="sqlite_project_description"
              placeholder="Project Description"
              value={sqlite_project.sqlite_project_description}
              onChange={handleChange}
              />
              <label>Description</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="sqlite_project_github_link"
              placeholder="Github Link"
              value={sqlite_project.sqlite_project_github_link}
              onChange={handleChange}
              />
              <label>Github Link</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="sqlite_project_live_link"
              placeholder="Live Link"
              value={sqlite_project.sqlite_project_live_link}
              onChange={handleChange}
              />
              <label>Live Link</label>
            </div>
          <div className="project-form-button">
            <button type="submit" className="project-button">Add SQLite Project</button>
            <Link to="/projects" className="project-button cancel-button">Cancel</Link>
          </div>
        </form>
        ) : (
          <div>
            <h4>Only the Admin can add a new SQLite Project.</h4>
            <Link to="/projects" className="project-button">Return to Projects</Link>
          </div>
        )} 
        </div>
    </div>
    )};

    const mapStateToProps = state => {
      return {
        sqlite_project_id: state.sqlite_project_id
      };
    };
    
    export default connect(mapStateToProps, { addSqliteProject })(SqliteProjectForm);