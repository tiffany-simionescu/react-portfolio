import React, { useState } from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addReduxProject } from '../../actions/reduxProjectActions';

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
    <div className="project-form">
      <div className="project-left-col">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="lake and trees"
          style={{ borderRadius: "10px 0 0 10px", height: "550px", width: "500px", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }}
        />
      </div>
      <div className="project-right-col">
        <h2>New Redux Project</h2>
        {localStorage.getItem('token') ? (
          <form onSubmit={handleSubmit}>

            <div className="project-form-box">
              <input 
              type="text"
              name="redux_project_image"
              placeholder="Image URL"
              value={redux_project.redux_project_image}
              onChange={handleChange}
              />
              <label>Image URL</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="redux_project_title"
              placeholder="Project Title"
              value={redux_project.redux_project_title}
              onChange={handleChange}
              />
              <label>Title</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="redux_project_description"
              placeholder="Project Description"
              value={redux_project.redux_project_description}
              onChange={handleChange}
              />
              <label>Description</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="redux_project_github_link"
              placeholder="Github Link"
              value={redux_project.redux_project_github_link}
              onChange={handleChange}
              />
              <label>Github Link</label>
            </div>

            <div className="project-form-box">
              <input 
              type="text"
              name="redux_project_live_link"
              placeholder="Live Link"
              value={redux_project.redux_project_live_link}
              onChange={handleChange}
              />
              <label>Live Link</label>
            </div>
          <div className="project-form-button">
            <button type="submit" className="project-button">Add Redux Project</button>
            <Link to="/#projects" className="project-button cancel-button">Cancel</Link>
          </div>
        </form>
        ) : (
          <div>
            <h4>Only the Admin can add a new Redux Project.</h4>
            {/* <Link to="/projects" className="project-button">Return to Projects</Link> */}
            <a href="/#projects" className="project-button">Return to Projects</a>
          </div>
        )} 
        </div>
    </div>
    )};

const mapStateToProps = state => {
  return {
    redux_project_id: state.redux_project_id
  };
};

export default connect(mapStateToProps, { addReduxProject })(ReduxProjectForm);