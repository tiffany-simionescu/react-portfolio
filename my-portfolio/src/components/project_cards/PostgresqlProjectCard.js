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
  deletePostgresqlProject, 
  editPostgresqlProject, 
  fetchPostgresqlProject 
} from '../../actions/postgresqlProjectActions';

function PostgresqlProjectCard(props) {

  const [postgresqlProject, setPostgresqlProject] = useState({
    postgresql_project_image: "",
    postgresql_project_title: "",
    postgresql_project_description: "",
    postgresql_project_github_link: "",
    postgresql_project_live_link: ""
  })

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    props.fetchPostgresqlProject(props.postgresql_project_id);
  }, []);

  const handleChange = e => {
    setPostgresqlProject({
      ...postgresqlProject,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editPostgresqlProject(props.postgresql_project_id, postgresqlProject);
    setEditMode(false);
    props.fetchPostgresqlProject(props.postgresql_project_id);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setPostgresqlProject({
      ...postgresqlProject,
      postgresql_project_image: props.postgresql_project_image,
      postgresql_project_title: props.postgresql_project_title,
      postgresql_project_description: props.postgresql_project_description,
      postgresql_project_github_link: props.postgresql_project_github_link,
      postgresql_project_live_link: props.postgresql_project_live_link
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
                  name="postgresql_project_image"
                  value={postgresqlProject.postgresql_project_image}
                  onChange={handleChange}
                />
                <label>Image URL:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="postgresql_project_title"
                  value={postgresqlProject.postgresql_project_title}
                  onChange={handleChange}
                />
                <label>Title:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="postgresql_project_description"
                  value={postgresqlProject.postgresql_project_description}
                  onChange={handleChange}
                />
                <label>Description:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="postgresql_project_github_link"
                  value={postgresqlProject.postgresql_project_github_link}
                  onChange={handleChange}
                />
                <label>Github Link:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="postgresql_project_live_link"
                  value={postgresqlProject.postgresql_project_live_link}
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
            <CardTitle style={{ height: '176px', background: `url(${props.postgresql_project_image}) center / cover` }}>
                <span className="project-title">
                  {props.postgresql_project_title}
                </span>
              </CardTitle>  
              <CardText className="project-card-description">
                {props.postgresql_project_description}
              </CardText>
              <CardActions border>
                <Button 
                  colored
                  style={{ fontSize: "12px", padding: "0" }}
                  href={props.postgresql_project_github_link} 
                  target="_blank">
                    Github
                </Button>
                <Button 
                  colored
                  style={{ fontSize: "12px" }}
                  href={props.postgresql_project_live_link} 
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
                      onClick={() => props.deletePostgresqlProject(props.postgresql_project_id, props)}>
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
  { deletePostgresqlProject, fetchPostgresqlProject, editPostgresqlProject })
  (PostgresqlProjectCard);