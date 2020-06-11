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
  deleteReduxProject, 
  editReduxProject, 
  fetchReduxProject 
} from '../../actions/reduxProjectActions';

function ReduxProjectCard(props) {

  const [reduxProject, setReduxProject] = useState({
    redux_project_image: "",
    redux_project_title: "",
    redux_project_description: "",
    redux_project_github_link: "",
    redux_project_live_link: ""
  })

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    props.fetchReduxProject(props.redux_project_id);
  }, []);

  const handleChange = e => {
    setReduxProject({
      ...reduxProject,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editReduxProject(props.redux_project_id, reduxProject);
    setEditMode(false);
    props.fetchReduxProject(props.redux_project_id);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setReduxProject({
      ...reduxProject,
      redux_project_image: props.redux_project_image,
      redux_project_title: props.redux_project_title,
      redux_project_description: props.redux_project_description,
      redux_project_github_link: props.redux_project_github_link,
      redux_project_live_link: props.redux_project_live_link
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
                  name="redux_project_image"
                  value={reduxProject.redux_project_image}
                  onChange={handleChange}
                />
                <label>Image URL:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="redux_project_title"
                  value={reduxProject.redux_project_title}
                  onChange={handleChange}
                />
                <label>Title:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="redux_project_description"
                  value={reduxProject.redux_project_description}
                  onChange={handleChange}
                />
                <label>Description:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="redux_project_github_link"
                  value={reduxProject.redux_project_github_link}
                  onChange={handleChange}
                />
                <label>Github Link:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="redux_project_live_link"
                  value={reduxProject.node_project_live_link}
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
            <CardTitle style={{ height: '176px', background: `url(${props.redux_project_image}) center / cover` }}>
                <span className="project-title">
                  {props.redux_project_title}
                </span>
              </CardTitle>  
              <CardText className="project-card-description">
                {props.redux_project_description}
              </CardText>
              <CardActions border>
                <Button 
                  colored
                  style={{ fontSize: "12px", padding: "0" }}
                  href={props.redux_project_github_link} 
                  target="_blank">
                    Github
                </Button>
                <Button 
                  colored
                  style={{ fontSize: "12px" }}
                  href={props.redux_project_live_link} 
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
                      onClick={() => props.deleteReduxProject(props.redux_project_id, props)}>
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
  { deleteReduxProject, fetchReduxProject, editReduxProject })
  (ReduxProjectCard);