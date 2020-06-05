import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchSqliteProjects } from '../../actions/sqliteProjectActions';
import SqliteProjectCard from '../project_cards/SqliteProjectCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const SqliteProjectCardContainer = props => {

  const [sqliteProjects, setSqliteProjects] = useState([]);
   
  useEffect(() => {
    // props.fetchSqliteProjects(props.sqlite_project_id);
    axiosWithAuth()
      .get('/api/sqliteprojects')
      .then(res => {
        setSqliteProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      {/* {props.sqlite_projects &&
        props.sqlite_projects.map((sqlite_project, index) => {
          return (
            <SqliteProjectCard key={index} sqlite_project={sqlite_project} />
          )
        })} */}
        {sqliteProjects.length > 0 ?
          (sqliteProjects.map(sqlite_project => {
            return (
                <SqliteProjectCard {...sqlite_project} key={sqlite_project.sqlite_project_id} />
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
//     sqlite_projects: state.displayedSqliteProjects,
//     isFetching: state.isFetching
//   };
// };

// export default connect(
//   mapStateToProps, 
//   { fetchSqliteProjects })(SqliteProjectCardContainer);

export default SqliteProjectCardContainer;