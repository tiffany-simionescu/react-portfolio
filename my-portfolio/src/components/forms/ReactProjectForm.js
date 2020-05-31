import React, { useState } from'react';
import { connect } from 'react-redux';
import { addReactProject } from '../../actions/reactProjectActions';

// Update style later

const ReactProjectForm = props => {
  const [react_project, setReactProject] = useState({
    react_project_image: "",
    react_project_title: "",
    react_project_description: "",
    react_project_github_link: "",
    react_project_live_link: ""
  });

  const handleChange = e => {
    setReactProject({
      ...react_project,
      [e.target.name]: e.target.value
    });

  const handleSubmit = e => {
    e.preventDefault();
    props.addReactProject(react_project, props.react_project_id);
    setReactProject({
      react_project_image: "",
      react_project_title: "",
      react_project_description: "",
      react_project_github_link: "",
      react_project_live_link: ""
    });
  };

  return (
    <div>
      <h2>Add A New React Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL</label>
        <input 
          type="text"
          name="react_project_image"
          placeholder="Image URL"
          value={react_project.react_project_image}
          onChange={handleChange}
        />
        <label>Title</label>
        <input 
          type="text"
          name="react_project_title"
          placeholder="Project Title"
          value={react_project.react_project_title}
          onChange={handleChange}
        />
        <label>Description</label>
        <input 
          type="text"
          name="react_project_description"
          placeholder="Project Description"
          value={react_project.react_project_description}
          onChange={handleChange}
        />
        <label>Github Link</label>
        <input 
          type="text"
          name="react_project_github_link"
          placeholder="Github Link"
          value={react_project.react_project_github_link}
          onChange={handleChange}
        />
        <label>Live Link</label>
        <input 
          type="text"
          name="react_project_live_link"
          placeholder="Live Link"
          value={react_project.react_project_live_link}
          onChange={handleChange}
        />
        <button type="submit">Add React Project</button>
      </form>
    </div>
    )};
};

const mapStateToProps = state => {
  return {
    react_project_id: state.react_project.react_project_id
  };
};

export default connect(mapStateToProps, { addReactProject })(ReactProjectForm);