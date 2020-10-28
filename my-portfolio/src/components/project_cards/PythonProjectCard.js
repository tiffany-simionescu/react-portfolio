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
  deletePythonProject, 
  editPythonProject, 
  fetchPythonProject 
} from '../../actions/pythonProjectActions';

function PythonProjectCard(props) {

  const [pythonProject, setPythonProject] = useState({
    python_project_image: "",
    python_project_title: "",
    python_project_description: "",
    python_project_github_link: "",
    python_project_live_link: ""
  })

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    props.fetchPythonProject(props.python_project_id);
  }, []);

  const handleChange = e => {
    setPythonProject({
      ...pythonProject,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editPythonProject(props.python_project_id, pythonProject);
    setEditMode(false);
    props.fetchPythonProject(props.python_project_id);
    window.location.reload(true);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setPythonProject({
      ...pythonProject,
      python_project_image: props.python_project_image,
      python_project_title: props.python_project_title,
      python_project_description: props.python_project_description,
      python_project_github_link: props.python_project_github_link,
      python_project_live_link: props.python_project_live_link
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
                  name="python_project_image"
                  value={pythonProject.python_project_image}
                  onChange={handleChange}
                />
                <label>Image URL:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="python_project_title"
                  value={pythonProject.python_project_title}
                  onChange={handleChange}
                />
                <label>Title:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="python_project_description"
                  value={pythonProject.python_project_description}
                  onChange={handleChange}
                />
                <label>Description:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="python_project_github_link"
                  value={pythonProject.python_project_github_link}
                  onChange={handleChange}
                />
                <label>Github Link:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="python_project_live_link"
                  value={pythonProject.python_project_live_link}
                  onChange={handleChange}
                />
                <label>Live Link:</label>
              </div>
              <button onClick={handleEdit}>Commit Changes</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </form>
          </div>
        ) : (
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', borderRadius: '10px' }}>
            <CardTitle style={{ height: '176px', background: `url(${props.python_project_image}) center / cover` }}>
                <span className="project-title">
                  {props.python_project_title}
                </span>
              </CardTitle>  
              <CardText className="project-card-description">
                {props.python_project_description}
              </CardText>
              <CardActions border>
                <Button 
                  colored
                  style={{ fontSize: "12px", padding: "0" }}
                  href={props.python_project_github_link} 
                  target="_blank">
                    Github
                </Button>
                <Button 
                  colored
                  style={{ fontSize: "12px" }}
                  href={props.python_project_live_link} 
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
                      onClick={() => props.deletePythonProject(props.python_project_id, props)}>
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
  { deletePythonProject, fetchPythonProject, editPythonProject })
  (PythonProjectCard);