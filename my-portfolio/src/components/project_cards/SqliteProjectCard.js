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
  deleteSqliteProject, 
  editSqliteProject, 
  fetchSqliteProject 
} from '../../actions/sqliteProjectActions';

function SqliteProjectCard(props) {

  const [sqliteProject, setSqliteProject] = useState({
    sqlite_project_image: "",
    sqlite_project_title: "",
    sqlite_project_description: "",
    sqlite_project_github_link: "",
    sqlite_project_live_link: ""
  })

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    props.fetchSqliteProject(props.sqlite_project_id);
  }, []);

  const handleChange = e => {
    setSqliteProject({
      ...sqliteProject,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    props.editSqliteProject(props.sqlite_project_id, sqliteProject);
    setEditMode(false);
    props.fetchSqliteProject(props.sqlite_project_id);
    window.location.reload(true);
  };

  const triggerEditConfirmation = e => {
    e.preventDefault();
    setEditMode(true);
    setSqliteProject({
      ...sqliteProject,
      sqlite_project_image: props.sqlite_project_image,
      sqlite_project_title: props.sqlite_project_title,
      sqlite_project_description: props.sqlite_project_description,
      sqlite_project_github_link: props.sqlite_project_github_link,
      sqlite_project_live_link: props.sqlite_project_live_link
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
                  name="sqlite_project_image"
                  value={sqliteProject.sqlite_project_image}
                  onChange={handleChange}
                />
                <label>Image URL:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="sqlite_project_title"
                  value={sqliteProject.sqlite_project_title}
                  onChange={handleChange}
                />
                <label>Title:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="sqlite_project_description"
                  value={sqliteProject.sqlite_project_description}
                  onChange={handleChange}
                />
                <label>Description:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="sqlite_project_github_link"
                  value={sqliteProject.sqlite_project_github_link}
                  onChange={handleChange}
                />
                <label>Github Link:</label>
              </div>
              <div className="project-label">
                <input 
                  type="text"
                  name="sqlite_project_live_link"
                  value={sqliteProject.sqlite_project_live_link}
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
            <CardTitle style={{ height: '176px', background: `url(${props.sqlite_project_image}) center / cover` }}>
                <span className="project-title">
                  {props.sqlite_project_title}
                </span>
              </CardTitle>  
              <CardText className="project-card-description">
                {props.sqlite_project_description}
              </CardText>
              <CardActions border>
                <Button 
                  colored
                  style={{ fontSize: "12px", padding: "0" }}
                  href={props.sqlite_project_github_link} 
                  target="_blank">
                    Github
                </Button>
                <Button 
                  colored
                  style={{ fontSize: "12px" }}
                  href={props.sqlite_project_live_link} 
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
                      onClick={() => props.deleteReduxProject(props.sqlite_project_id, props)}>
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
  { deleteSqliteProject, fetchSqliteProject, editSqliteProject })
  (SqliteProjectCard);