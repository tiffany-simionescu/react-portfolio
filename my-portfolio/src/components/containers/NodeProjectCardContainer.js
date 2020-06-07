import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchNodeProjects } from '../../actions/nodeProjectActions';
import NodeProjectCard from '../project_cards/NodeProjectCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import '../../App.css';

const NodeProjectCardContainer = props => {

  const [nodeProjects, setNodeProjects] = useState([]);

  useEffect(() => {
    // props.fetchNodeProjects(props.node_project_id);
    axiosWithAuth()
      .get('/api/nodeprojects')
      .then(res => {
        setNodeProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="project-card-container">
      {/* {props.node_projects &&
        props.node_projects.map((node_project, index) => {
          return (
            <NodeProjectCard key={index} node_project={node_project} />
          )
        })} */}
        {nodeProjects.length > 0 ?
          (nodeProjects.map(node_project => {
            return (
                <NodeProjectCard {...node_project} key={node_project.node_project_id} />
            )
          })) : (
            <h4>Loading...</h4>
          )
        }
    </div>
  )
};

// const mapStateToProps = state => {
//   return {
//     node_projects: state.displayedNodeProjects,
//     isFetching: state.isFetching
//   };
// };

// export default connect(
//   mapStateToProps, 
//   { fetchNodeProjects })(NodeProjectCardContainer);

export default NodeProjectCardContainer;