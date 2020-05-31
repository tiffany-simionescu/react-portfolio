import React, { useState } from'react';
import { connect } from 'react-redux';
import { addNodeProject } from '../../actions/nodeProjectActions';

// Update style later

const NodeProjectForm = props => {
  const [node_project, setNodeProject] = useState({
    node_project_image: "",
    node_project_title: "",
    node_project_description: "",
    node_project_github_link: "",
    node_project_live_link: ""
  });

  const handleChange = e => {
    setNodeProject({
      ...node_project,
      [e.target.name]: e.target.value
    });

  const handleSubmit = e => {
    e.preventDefault();
    props.addNodeProject(node_project, props.node_project_id);
    setNodeProject({
      node_project_image: "",
      node_project_title: "",
      node_project_description: "",
      node_project_github_link: "",
      node_project_live_link: ""
    });
  };

  return (
    <div>
      <h2>Add A New Node Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Image URL</label>
        <input 
          type="text"
          name="node_project_image"
          placeholder="Image URL"
          value={node_project.node_project_image}
          onChange={handleChange}
        />
        <label>Title</label>
        <input 
          type="text"
          name="node_project_title"
          placeholder="Project Title"
          value={node_project.node_project_title}
          onChange={handleChange}
        />
        <label>Description</label>
        <input 
          type="text"
          name="node_project_description"
          placeholder="Project Description"
          value={node_project.node_project_description}
          onChange={handleChange}
        />
        <label>Github Link</label>
        <input 
          type="text"
          name="node_project_github_link"
          placeholder="Github Link"
          value={node_project.node_project_github_link}
          onChange={handleChange}
        />
        <label>Live Link</label>
        <input 
          type="text"
          name="node_project_live_link"
          placeholder="Live Link"
          value={node_project.node_project_live_link}
          onChange={handleChange}
        />
        <button type="submit">Add Node Project</button>
      </form>
    </div>
    )};
};

const mapStateToProps = state => {
  return {
    node_project_id: state.node_project.node_project_id
  };
};

export default connect(mapStateToProps, { addNodeProject })(NodeProjectForm);