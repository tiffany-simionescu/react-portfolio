import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReduxProjects } from '../../actions/reduxProjectActions';
import ReduxProjectCard from '../project_cards/ReduxProjectCard';

const ReduxProjectCardContainer = props => {
  useEffect(() => {
    props.fetchReduxProjects(props.redux_project_id);
  }, []);

  return (
    <div>
      {props.redux_projects &&
        props.redux_projects.map((redux_project, index) => {
          return (
            <ReduxProjectCard key={index} redux_project={redux_project} />
          )
        })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    redux_projects: state.displayedReduxProjects,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps, 
  { fetchReduxProjects })(ReduxProjectCardContainer);