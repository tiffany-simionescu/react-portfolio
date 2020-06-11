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
  deleteNodeProject, 
  editNodeProject, 
  fetchNodeProject 
} from '../../actions/nodeProjectActions';

function NodeProjectCard(props) {

  const [nodeProject, setNodeProject] = useState({
    node_project_image: "",
    node_project_title: "",
    node_project_description: "",
    node_project_github_link: "",
    node_project_live_link: ""
  })

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    props.fetchNodeProject(props.node_project_id);
  }, []);

  const handleChange = e => {
    setNodeProject({
      ...nodeProject,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editNodeProject(props.node_project_id, nodeProject);
    setEditMode(false);
    props.fetchNodeProject(props.node_project_id);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setNodeProject({
      ...nodeProject,
      node_project_image: props.node_project_image,
      node_project_title: props.node_project_title,
      node_project_description: props.node_project_description,
      node_project_github_link: props.node_project_github_link,
      node_project_live_link: props.node_project_live_link
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
                  name="node_project_image"
                  value={nodeProject.node_project_image}
                  onChange={handleChange}
                />
                <label>Image URL:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="node_project_title"
                  value={nodeProject.node_project_title}
                  onChange={handleChange}
                />
                <label>Title:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="node_project_description"
                  value={nodeProject.node_project_description}
                  onChange={handleChange}
                />
                <label>Description:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="node_project_github_link"
                  value={nodeProject.node_project_github_link}
                  onChange={handleChange}
                />
                <label>Github Link:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="node_project_live_link"
                  value={nodeProject.node_project_live_link}
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
            <CardTitle style={{ height: '176px', background: `url(${props.node_project_image}) center / cover` }}>
                <span className="project-title">
                  {props.node_project_title}
                </span>
              </CardTitle>  
              <CardText className="project-card-description">
                {props.node_project_description}
              </CardText>
              <CardActions border>
                <Button 
                  colored
                  style={{ fontSize: "12px", padding: "0" }}
                  href={props.node_project_github_link} 
                  target="_blank">
                    Github
                </Button>
                <Button 
                  colored
                  style={{ fontSize: "12px" }}
                  href={props.node_project_live_link} 
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
                      onClick={() => props.deleteNodeProject(props.node_project_id, props)}>
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
  { deleteNodeProject, fetchNodeProject, editNodeProject })
  (NodeProjectCard);