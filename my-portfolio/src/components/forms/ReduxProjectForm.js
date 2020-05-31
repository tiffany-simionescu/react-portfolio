import React, { useState } from'react';
import { connect } from 'react-redux';
import { addReduxProject } from '../../actions/reduxProjectActions';

// Update style later

const ReduxProjectForm = props => {
  const [redux_project, setReduxProject] = useState({
    redux_project_image: "",
    redux_project_title: "",
    redux_project_description: "",
    redux_project_github_link: "",
    redux_project_live_link: ""
  });

  const handleChange = e => {
    setReduxProject({ ...redux_project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addReduxProject(redux_project, props);
  };

  return (
    <div>
      <h2>New Redux Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL</label>
        <input 
          type="text"
          name="redux_project_image"
          placeholder="Image URL"
          value={redux_project.redux_project_image}
          onChange={handleChange}
        />
        <label>Title</label>
        <input 
          type="text"
          name="redux_project_title"
          placeholder="Project Title"
          value={redux_project.redux_project_title}
          onChange={handleChange}
        />
        <label>Description</label>
        <input 
          type="text"
          name="redux_project_description"
          placeholder="Project Description"
          value={redux_project.redux_project_description}
          onChange={handleChange}
        />
        <label>Github Link</label>
        <input 
          type="text"
          name="redux_project_github_link"
          placeholder="Github Link"
          value={redux_project.redux_project_github_link}
          onChange={handleChange}
        />
        <label>Live Link</label>
        <input 
          type="text"
          name="redux_project_live_link"
          placeholder="Live Link"
          value={redux_project.redux_project_live_link}
          onChange={handleChange}
        />
        <button type="submit">Add Redux Project</button>
      </form>
    </div>
    )};

const mapStateToProps = state => {
  return {
    redux_project_id: state.redux_project_id
  };
};

export default connect(mapStateToProps, { addReduxProject })(ReduxProjectForm);