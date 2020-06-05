import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { fetchPostgresqlProjects } from '../../actions/postgresqlProjectActions';
import PostgresqlProjectCard from '../project_cards/PostgresqlProjectCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const PostgresqlProjectCardContainer = props => {

  const [postgresqlProjects, setPostgresqlProjects] = useState([]);

  useEffect(() => {
    // props.fetchPostgresqlProjects(props.postgresql_project_id);
    axiosWithAuth()
      .get('/api/postgresqlprojects')
      .then(res => {
        setPostgresqlProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      {/* {props.postgresql_projects &&
        props.postgresql_projects.map((postgresql_project, index) => {
          return (
            <PostgresqlProjectCard key={index} postgresql_project={postgresql_project} />
          )
        })} */}
        {postgresqlProjects.length > 0 ?
          (postgresqlProjects.map(postgresql_project => {
            return (
                <PostgresqlProjectCard {...postgresql_project} key={postgresql_project.postgresql_project_id} />
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
//     postgresql_projects: state.displayedPostgresqlProjects,
//     isFetching: state.isFetching
//   };
// };

// export default connect(
//   mapStateToProps, 
//   { fetchPostgresqlProjects })(PostgresqlProjectCardContainer);

export default PostgresqlProjectCardContainer;