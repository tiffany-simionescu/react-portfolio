import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button
} from 'react-mdl';
import { 
  deleteReactProject, 
  editReactProject, 
  fetchReactProject 
} from '../../actions/reactProjectActions';

function ReactProjectCard(props) {

  const [reactProject, setReactProject] = useState({
    react_project_image: "",
    react_project_title: "",
    react_project_description: "",
    react_project_github_link: "",
    react_project_live_link: ""
  })

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    props.fetchReactProject(props.react_project_id);
  }, []);

  const handleChange = e => {
    setReactProject({
      ...reactProject,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editReactProject(props.react_project_id, reactProject);
    setEditMode(false);
    props.fetchReactProject(props.react_project_id);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setReactProject({
      ...reactProject,
      react_project_image: props.react_project_image,
      react_project_title: props.react_project_title,
      react_project_description: props.react_project_description,
      react_project_github_link: props.react_project_github_link,
      react_project_live_link: props.react_project_live_link
    })
  }

  return (
    <div className="project-card">
        {editMode ? (
          <div className="project-box">
            <h1>Edit Project</h1>
            <form>
              <div className="project-label">
                <input 
                  type="text"
                  name="react_project_image"
                  value={reactProject.react_project_image}
                  onChange={handleChange}
                />
                <label>Image URL:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="react_project_title"
                  value={reactProject.react_project_title}
                  onChange={handleChange}
                />
                <label>Title:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="react_project_description"
                  value={reactProject.react_project_description}
                  onChange={handleChange}
                />
                <label>Description:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="react_project_github_link"
                  value={reactProject.react_project_github_link}
                  onChange={handleChange}
                />
                <label>Github Link:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="react_project_live_link"
                  value={reactProject.react_project_live_link}
                  onChange={handleChange}
                />
                <label>Live Link:</label>
              </div>
              <button onClick={handleEdit}>Commit Changes</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </form>
          </div>
        ) : (
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: `url(${props.react_project_image}) center / cover` }}>
                <span className="project-title">
                  {props.react_project_title}
                </span>
              </CardTitle>  
              <CardText className="project-card-description">
                {props.react_project_description}
              </CardText>
              <CardActions border>
                <Button 
                  colored
                  style={{ fontSize: "12px", padding: "0" }}
                  href={props.react_project_github_link} 
                  target="_blank">
                    Github
                </Button>
                <Button 
                  colored
                  style={{ fontSize: "12px" }}
                  href={props.react_project_live_link} 
                  target="_blank">
                    LiveDemo
                </Button>
                {localStorage.getItem("token") ? (
                  <>
                    <Button 
                      colored
                      style={{ fontSize: "12px" }}
                      onClick={triggerEditConfirmation}
                      target="_blank">
                        Edit
                    </Button>
                    <Button
                      colored 
                      style={{ fontSize: "12px" }}
                      onClick={() => props.deleteReactProject(props.react_project_id, props)}>
                      Delete
                    </Button>
                </>
                ) : (
                  <span /> 
                )}
              </CardActions>
            </Card>
        )}
            
    </div>
  )
} 

export default connect(null, 
  { deleteReactProject, fetchReactProject, editReactProject })
  (ReactProjectCard);