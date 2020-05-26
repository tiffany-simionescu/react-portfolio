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

function NodeProjectCard(props) {
  return (
    <div>
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${props.node_project_image}) center / cover` }}>
              {props.node_project_title}
            </CardTitle>  
            <CardText>
              {props.node_project_description}
            </CardText>
            <CardActions border>
              <Button 
                colored
                href={props.node_project_github_link} 
                target="_blank">
                  Github
              </Button>
              <Button 
                colored
                href={props.node_project_live_link} 
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

export default NodeProjectCard;