import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchReactProjects } from '../../actions/reactProjectActions';
import ReactProjectCard from '../project_cards/ReactProjectCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const ReactProjectCardContainer = props => {

  const [reactProjects, setReactProjects] = useState([]);

  useEffect(() => {
    // props.fetchReactProjects(props.react_project_id);
    axiosWithAuth()
      .get('/api/reactprojects')
      .then(res => {
        setReactProjects(res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      {/* {props.react_projects &&
        props.react_projects.map((react_project) => {
          return (
            // <ReactProjectCard key={index} react_project={react_project} />
            <ReactProjectCard {...react_project} key={react_project.react_project_id} />
          )
        })} */}
        {reactProjects.length > 0 ?
          (reactProjects.map(react_project => {
            return (
                <ReactProjectCard {...react_project} key={react_project.react_project_id} />
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
//     react_projects: state.displayedReactProjects,
//     isFetching: state.isFetching
//   };
// };

// export default connect(
//   mapStateToProps, 
//   { fetchReactProjects })(ReactProjectCardContainer);

export default ReactProjectCardContainer;