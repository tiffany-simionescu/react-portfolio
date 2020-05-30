import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactProjectCardContainer from './containers/ReactProjectCardContainer';
import ReactProjectCardContainer from './containers/ReduxProjectCardContainer';
import NodeProjectCardContainer from './containers/NodeProjectCardContainer';
import SqliteProjectCardContainer from './containers/SqliteProjectCardContainer';
import PostgresqlProjectCardContainer from './containers/PostgresqlProjectCardContainer';

// import ReactProjectCard from './project_cards/ReactProjectCard';
// import ReduxProjectCard from './project_cards/ReduxProjectCard';
// import NodeProjectCard from './project_cards/NodeProjectCard';
// import SqliteProjectCard from './project_cards/SqliteProjectCard';
// import PostgresqlProjectCard from './project_cards/PostgresqlProjectCard';

import { fetchReactProjects} from '../actions/reactProjectActions';
import { fetchReduxProjects } from '../actions/reduxProjectActions';
import { fetchNodeProjects } from '../actions/nodeProjectActions';
import { fetchSqliteProjects } from '../actions/sqliteProjectActions';
import { fetchPostgresqlProjects } from '../actions/postgresqlProjectActions';

// React Mdl 
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ReduxProjectCardContainer from './containers/ReduxProjectCardContainer';

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

      // useEffect(() => {
      //   this.props.fetchReactProjects(this.props.react_project_id);
      // }, []);

      return (
        <div className="projects-grid">
          {/* {this.props.react_projects &&
            this.props.react_projects.map((react_project, index) => (
              <ReactProjectCard key={index} react_project={react_project} />
            ))} */}
          <ReactProjectCardContainer react_project_id={this.props.react_project.react_project_id} />
        </div>
      )

    // Redux Projects
    } else if (this.state.activeTab === 1) {

      // useEffect(() => {
      //   this.props.fetchReduxProjects(this.props.redux_project_id);
      // }, []);

      return (
        <div className="projects-grid">
          {/* {this.props.redux_projects &&
            this.props.redux_projects.map((redux_project, index) => (
              <ReduxProjectCard key={index} redux_project={redux_project} />
            ))} */}
          <ReduxProjectCardContainer redux_project_id={this.props.redux_project.redux_project_id} />
        </div>
      )

    // Node Projects
    } else if (this.state.activeTab === 2) {

      // useEffect(() => {
      //   this.props.fetchNodeProjects(this.props.node_project_id);
      // }, []);

      return (
        <div className="projects-grid">
          {/* {this.props.node_projects &&
            this.props.node_projects.map((node_project, index) => (
              <NodeProjectCard key={index} node_project={node_project} />
            ))} */}
            <NodeProjectCardContainer node_project_id={this.props.node_project.node_project_id} />
        </div>
      )

    // Sqlite Projects
  } else if (this.state.activeTab === 3) {

    // useEffect(() => {
    //   this.props.fetchSqliteProjects(this.props.sqlite_project_id);
    // }, []);

    return (
      <div className="projects-grid">
        {/* {this.props.sqlite_projects &&
          this.props.sqlite_projects.map((sqlite_project, index) => (
            <SqliteProjectCard key={index} sqlite_project={sqlite_project} />
          ))} */}
        <SqliteProjectCardContainer sqlite_project_id={this.props.sqlite_project.sqlite_project_id} />
      </div>
    )

    // PostgreSQL Projects
  } else if (this.state.activeTab === 4) {

    // useEffect(() => {
    //   this.props.fetchPostgresqlProjects(this.props.postgresql_project_id);
    // }, []);

    return (
      <div className="projects-grid">
        {/* {this.props.postgresql_projects &&
          this.props.postgresql_projects.map((postgresql_project, index) => (
            <PostgresqlProjectCard key={index} postgresql_project={postgresql_project} />
          ))} */}
        <PostgresqlProjectCardContainer postgresql_project_id={this.props.postgresql_project.postgresql_project_id} />
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
    react_project: state.redux_project,
    redux_project: state.redux_project,
    node_project: state.node_project,
    sqlite_project: state.sqlite_project,
    postgresql_project: state.postgresql_project
  };
};

export default connect(mapStateToProps, {})(Projects);