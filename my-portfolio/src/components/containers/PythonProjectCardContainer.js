import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchReactProjects } from '../../actions/reactProjectActions';
import PythonProjectCard from '../project_cards/PythonProjectCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import '../../App.css';

const PythonProjectCardContainer = props => {

  const [pythonProjects, setPythonProjects] = useState([]);

  useEffect(() => {
    // props.fetchReactProjects(props.react_project_id);
    axiosWithAuth()
      .get('/api/pythonprojects')
      .then(res => {
        setPythonProjects(res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="project-card-container">
      {/* {props.react_projects &&
        props.react_projects.map((react_project) => {
          return (
            // <ReactProjectCard key={index} react_project={react_project} />
            <ReactProjectCard {...react_project} key={react_project.react_project_id} />
          )
        })} */}
        {pythonProjects.length > 0 ?
          (pythonProjects.map(python_project => {
            return (
                <PythonProjectCard {...python_project} key={python_project.python_project_id} />
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

export default PythonProjectCardContainer;