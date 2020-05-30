import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchReactProjects } from '../../actions/reactProjectActions';
import ReactProjectCard from '../project_cards/ReactProjectCard';

const ReactProjectCardContainer = props => {
  useEffect(() => {
    props.fetchReactProjects(props.react_project_id);
  }, []);

  return (
    <div>
      {props.react_projects &&
        props.react_projects.map((react_project, index) => {
          <ReactProjectCard key={index} react_project={react_project} />
        })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    react_projects: state.displayedReactProjects,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps, 
  { fetchReactProjects })(ReactProjectCardContainer);