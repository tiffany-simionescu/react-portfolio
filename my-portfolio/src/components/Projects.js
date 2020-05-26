import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import ReactProjectCard from './project_cards/ReactProjectCard';
import ReduxProjectCard from './project_cards/ReduxProjectCard';
import NodeProjectCard from './project_cards/NodeProjectCard';
import SqliteProjectCard from './project_cards/SqliteProjectCard';
import PostgresqlProjectCard from './project_cards/PostgresqlProjectCard';

import { fetchReactProjects} from '../actions/reactProjectActions';
import { fetchReduxProjects } from '../actions/reduxProjectActions';
import { fetchNodeProjects } from '../actions/nodeProjectActions';
import { fetchSqliteProjects } from '../actions/sqliteProjectActions';
import { fetchPostgresqlProjects } from '../actions/postgresqlProjectActions';

// React Mdl 
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0
    }
  }

  toggleCategories() {
    // React Projects
    if (this.state.activeTab === 0) {

      useEffect(() => {
        this.props.fetchReactProjects(this.props.react_project_id);
      }, []);

      return (
        <div className="projects-grid">
          {this.props.react_projects &&
            this.props.react_projects.map((react_project, index) => (
              <ReactProjectCard key={index} react_project={react_project} />
            ))}
        </div>
      )

    // Redux Projects
    } else if (this.state.activeTab === 1) {

      useEffect(() => {
        this.props.fetchReduxProjects(this.props.redux_project_id);
      }, []);

      return (
        <div className="projects-grid">
          {this.props.redux_projects &&
            this.props.redux_projects.map((redux_project, index) => (
              <ReduxProjectCard key={index} redux_project={redux_project} />
            ))}
        </div>
      )

    // Node Projects
    } else if (this.state.activeTab === 2) {

      useEffect(() => {
        this.props.fetchNodeProjects(this.props.node_project_id);
      }, []);

      return (
        <div className="projects-grid">
          {this.props.node_projects &&
            this.props.node_projects.map((node_project, index) => (
              <NodeProjectCard key={index} node_project={node_project} />
            ))}
        </div>
      )

    // Sqlite Projects
  } else if (this.state.activeTab === 3) {

    useEffect(() => {
      this.props.fetchSqliteProjects(this.props.sqlite_project_id);
    }, []);

    return (
      <div className="projects-grid">
        {this.props.sqlite_projects &&
          this.props.sqlite_projects.map((sqlite_project, index) => (
            <SqliteProjectCard key={index} sqlite_project={sqlite_project} />
          ))}
      </div>
    )

    // PostgreSQL Projects
  } else if (this.state.activeTab === 4) {

    useEffect(() => {
      this.props.fetchPostgresqlProjects(this.props.postgresql_project_id);
    }, []);

    return (
      <div className="projects-grid">
        {this.props.postgresql_projects &&
          this.props.postgresql_projects.map((postgresql_project, index) => (
            <PostgresqlProjectCard key={index} postgresql_project={postgresql_project} />
          ))}
      </div>
    )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Redux</Tab>
          <Tab>NodeJS</Tab>
          <Tab>Sqlite</Tab>
          <Tab>PostgreSQL</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    react_projects: state.displayedReactProjects,
    redux_projects: state.displayedReduxProjects,
    node_projects: state.displayedNodeProjects,
    sqlite_projects: state.displayedSqliteProjects,
    postgresql_projects: state.displayedPostgresqlProjects,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { 
  fetchReactProjects, 
  fetchReduxProjects, 
  fetchNodeProjects, 
  fetchSqliteProjects, 
  fetchPostgresqlProjects })(Projects);