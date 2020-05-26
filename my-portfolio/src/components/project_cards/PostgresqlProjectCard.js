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

function PostgresqlProjectCard(props) {
  return (
    <div>
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${props.postgresql_project_image}) center / cover` }}>
              {props.postgresql_project_title}
            </CardTitle>  
            <CardText>
              {props.postgresql_project_description}
            </CardText>
            <CardActions border>
              <Button 
                colored
                href={props.postgresql_project_github_link} 
                target="_blank">
                  Github
              </Button>
              <Button 
                colored
                href={props.postgresql_project_live_link} 
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

export default PostgresqlProjectCard;