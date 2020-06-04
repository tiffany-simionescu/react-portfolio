import React, { useState } from'react';
import { connect } from 'react-redux';
import { addPostgresqlProject } from '../../actions/postgresqlProjectActions';

// Update style later

const PostgresqlProjectForm = props => {
  const [postgresql_project, setPostgresqlProject] = useState({
    postgresql_project_image: "",
    postgresql_project_title: "",
    postgresql_project_description: "",
    postgresql_project_github_link: "",
    postgresql_project_live_link: ""
  });

  const handleChange = e => {
    setPostgresqlProject({ ...postgresql_project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addPostgresqlProject(postgresql_project, props);
  };

  return (
    <div>
      <h2>New PostgreSQL Project</h2>
        {localStorage.getItem('token') ? (
          <form onSubmit={handleSubmit}>
          <label>Image URL</label>
          <input 
            type="text"
            name="postgresql_project_image"
            placeholder="Image URL"
            value={postgresql_project.postgresql_project_image}
            onChange={handleChange}
          />
          <label>Title</label>
          <input 
            type="text"
            name="postgresql_project_title"
            placeholder="Project Title"
            value={postgresql_project.postgresql_project_title}
            onChange={handleChange}
          />
          <label>Description</label>
          <input 
            type="text"
            name="postgresql_project_description"
            placeholder="Project Description"
            value={postgresql_project.postgresql_project_description}
            onChange={handleChange}
          />
          <label>Github Link</label>
          <input 
            type="text"
            name="postgresql_project_github_link"
            placeholder="Github Link"
            value={postgresql_project.postgresql_project_github_link}
            onChange={handleChange}
          />
          <label>Live Link</label>
          <input 
            type="text"
            name="postgresql_project_live_link"
            placeholder="Live Link"
            value={postgresql_project.postgresql_project_live_link}
            onChange={handleChange}
          />
          <button type="submit">Add PostgreSQL Project</button>
        </form>
        ) : (
          <h4>Only the Admin can add a new PostgreSQL Project.</h4>
        )}
    </div>
    )};

    const mapStateToProps = state => {
      return {
        // loggedIn: state.isLoggedIn,
        postgresql_project_id: state.postgresql_project_id
      };
    };
    
    export default connect(mapStateToProps, { addPostgresqlProject })(PostgresqlProjectForm);