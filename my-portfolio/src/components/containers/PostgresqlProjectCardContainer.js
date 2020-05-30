import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostgresqlProjects } from '../../actions/postgresqlProjectActions';
import PostgresqlProjectCard from '../project_cards/PostgresqlProjectCard';

const PostgresqlProjectCardContainer = props => {
  useEffect(() => {
    props.fetchPostgresqlProjects(props.postgresql_project_id);
  }, []);

  return (
    <div>
      {props.postgresql_projects &&
        props.postgresql_projects.map((postgresql_project, index) => {
          <PostgresqlProjectCard key={index} postgresql_project={postgresql_project} />
        })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    postgresql_projects: state.displayedPostgresqlProjects,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps, 
  { fetchPostgresqlProjects })(PostgresqlProjectCardContainer);