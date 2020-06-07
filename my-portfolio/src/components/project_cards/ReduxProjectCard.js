import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';
import '../../App.css';

function ReduxProjectCard(props) {
  return (
    <div className="project-card">
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
                href={props.redux_project_github_link} 
                target="_blank">
                  Github
              </Button>
              <Button 
                colored
                href={props.redux_project_live_link} 
                target="_blank">
                  LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
    </div>
  )
} 

export default ReduxProjectCard;