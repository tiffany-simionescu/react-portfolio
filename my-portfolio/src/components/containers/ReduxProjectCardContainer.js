import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchReduxProjects } from '../../actions/reduxProjectActions';
import ReduxProjectCard from '../project_cards/ReduxProjectCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const ReduxProjectCardContainer = props => {

  const [reduxProjects, setReduxProjects] = useState([]);

  useEffect(() => {
    // props.fetchReduxProjects(props.redux_project_id);
    axiosWithAuth()
      .get('/api/reduxprojects')
      .then(res => {
        setReduxProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      {/* {props.redux_projects &&
        props.redux_projects.map((redux_project, index) => {
          return (
            <ReduxProjectCard key={index} redux_project={redux_project} />
          )
        })} */}
        {reduxProjects.length > 0 ?
          (reduxProjects.map(redux_project => {
            return (
                <ReduxProjectCard {...redux_project} key={redux_project.redux_project_id} />
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
//     redux_projects: state.displayedReduxProjects,
//     isFetching: state.isFetching
//   };
// };

// export default connect(
//   mapStateToProps, 
//   { fetchReduxProjects })(ReduxProjectCardContainer);

export default ReduxProjectCardContainer;