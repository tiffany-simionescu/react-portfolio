import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSqliteProjects } from '../../actions/sqliteProjectActions';
import SqliteProjectCard from '../project_cards/SqliteProjectCard';

const SqliteProjectCardContainer = props => {
  useEffect(() => {
    props.fetchSqliteProjects(props.sqlite_project_id);
  }, []);

  return (
    <div>
      {props.sqlite_projects &&
        props.sqlite_projects.map((sqlite_project, index) => {
          return (
            <SqliteProjectCard key={index} sqlite_project={sqlite_project} />
          )
        })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    sqlite_projects: state.displayedSqliteProjects,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps, 
  { fetchSqliteProjects })(SqliteProjectCardContainer);