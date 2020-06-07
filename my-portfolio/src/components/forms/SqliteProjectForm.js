import React, { useState } from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSqliteProject } from '../../actions/sqliteProjectActions';

// Update style later

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
    <div>
      <h2>New SQLite Project</h2>
        {props.loggedIn ? (
          <form onSubmit={handleSubmit}>
          <label>Image URL</label>
          <input 
            type="text"
            name="sqlite_project_image"
            placeholder="Image URL"
            value={sqlite_project.sqlite_project_image}
            onChange={handleChange}
          />
          <label>Title</label>
          <input 
            type="text"
            name="sqlite_project_title"
            placeholder="Project Title"
            value={sqlite_project.sqlite_project_title}
            onChange={handleChange}
          />
          <label>Description</label>
          <input 
            type="text"
            name="sqlite_project_description"
            placeholder="Project Description"
            value={sqlite_project.sqlite_project_description}
            onChange={handleChange}
          />
          <label>Github Link</label>
          <input 
            type="text"
            name="sqlite_project_github_link"
            placeholder="Github Link"
            value={sqlite_project.sqlite_project_github_link}
            onChange={handleChange}
          />
          <label>Live Link</label>
          <input 
            type="text"
            name="sqlite_project_live_link"
            placeholder="Live Link"
            value={sqlite_project.sqlite_project_live_link}
            onChange={handleChange}
          />
          <button type="submit">Add SQLite Project</button>
        </form>
        ) : (
          <div>
            <h4>Only the Admin can add a new SQLite Project.</h4>
            <Link to="/projects">Return to Projects</Link>
          </div>
        )}
    </div>
    )};

    const mapStateToProps = state => {
      return {
        loggedIn: state.isLoggedIn,
        sqlite_project_id: state.sqlite_project_id
      };
    };
    
    export default connect(mapStateToProps, { addSqliteProject })(SqliteProjectForm);