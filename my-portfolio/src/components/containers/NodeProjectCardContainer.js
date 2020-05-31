import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNodeProjects } from '../../actions/nodeProjectActions';
import NodeProjectCard from '../project_cards/NodeProjectCard';

const NodeProjectCardContainer = props => {
  useEffect(() => {
    props.fetchNodeProjects(props.node_project_id);
  }, []);

  return (
    <div>
      {props.node_projects &&
        props.node_projects.map((node_project, index) => {
          return (
            <NodeProjectCard key={index} node_project={node_project} />
          )
        })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    node_projects: state.displayedNodeProjects,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps, 
  { fetchNodeProjects })(NodeProjectCardContainer);