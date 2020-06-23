import React, { useState } from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNodeProject } from '../../actions/nodeProjectActions';

const NodeProjectForm = props => {
  const [node_project, setNodeProject] = useState({
    node_project_image: "",
    node_project_title: "",
    node_project_description: "",
    node_project_github_link: "",
    node_project_live_link: ""
  });

  const handleChange = e => {
    setNodeProject({ ...node_project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNodeProject(node_project, props);
  };

  return (
    <div className="project-form">
      <div className="project-left-col">
        <img 
          src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="lake and trees"
          style={{ borderRadius: "10px 0 0 10px", height: "550px", width: "500px", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }}
        />
      </div>
      <div className="project-right-col">
        <h2>New Node Project</h2>
        {localStorage.getItem('token') ? (
          <form onSubmit={handleSubmit}>

            <div className="project-form-box">
              <input 
              type="text"
              name="node_project_image"
              placeholder="Image URL"
              value={node_project.node_project_image}
              onChange={handleChange}
              />
              <label>Image URL</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="node_project_title"
              placeholder="Project Title"
              value={node_project.node_project_title}
              onChange={handleChange}
              />
              <label>Title</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="node_project_description"
              placeholder="Project Description"
              value={node_project.node_project_description}
              onChange={handleChange}
              />
              <label>Description</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="node_project_github_link"
              placeholder="Github Link"
              value={node_project.node_project_github_link}
              onChange={handleChange}
              />
              <label>Github Link</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="node_project_live_link"
              placeholder="Live Link"
              value={node_project.node_project_live_link}
              onChange={handleChange}
              />
              <label>Live Link</label>
            </div>
          <div className="project-form-button">
            <button type="submit" className="project-button">Add Node Project</button>
            <Link to="/projects" className="project-button cancel-button">Cancel</Link>
          </div>
        </form>
        ) : (
          <div>
            <h4>Only the Admin can add a new Node Project.</h4>
            <Link to="/projects" className="project-button">Return to Projects</Link>
          </div>
        )} 
        </div>
    </div>
    )};

    const mapStateToProps = state => {
      return {
        node_project_id: state.node_project_id
      };
    };
    
    export default connect(mapStateToProps, { addNodeProject })(NodeProjectForm);