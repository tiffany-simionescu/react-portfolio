import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import ReactProjectCard from './project_cards/ReactProjectCard';

import ReactProjectCardContainer from './containers/ReactProjectCardContainer';
import ReduxProjectCardContainer from './containers/ReduxProjectCardContainer';
import NodeProjectCardContainer from './containers/NodeProjectCardContainer';
import SqliteProjectCardContainer from './containers/SqliteProjectCardContainer';
import PostgresqlProjectCardContainer from './containers/PostgresqlProjectCardContainer';

import ReactProjectForm from './forms/ReactProjectForm';
import ReduxProjectForm from './forms/ReduxProjectForm';
import NodeProjectForm from './forms/NodeProjectForm';
import SqliteProjectForm from './forms/SqliteProjectForm';
import PostgresqlProjectForm from './forms/PostgresqlProjectForm';

// React Mdl 
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
    }
  }

  toggleCategories() {
    // React Projects
    if (this.state.activeTab === 0) {

      return (
        <div className="projects-grid">
          {/* {this.props.react_projects &&
            // this.props.react_projects.map((react_project, index) => (
              // <ReactProjectCard key={index} react_project={react_project} />
              <ReactProjectCardContainer react_project-id={index} react_project={react_project} />
            ))} */}
            <ReactProjectCardContainer />
          {/* <ReactProjectCardContainer react_project_id={this.props.react_project_id} /> */}
          <Link to="/projects/react" className="project-button">Add React Project</Link>
          <Route path="/projects/react" component={ReactProjectForm} />
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
          <ReduxProjectCardContainer redux_project_id={this.props.redux_project_id} />
          <Link to="/projects/redux" className="project-button">Add Redux Project</Link>
          <Route path="/projects/redux" component={ReduxProjectForm} />
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
            <NodeProjectCardContainer node_project_id={this.props.node_project_id} />
            <Link to="/projects/node" className="project-button">Add Node Project</Link>
            <Route path="/projects/node" component={NodeProjectForm} />
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
        <SqliteProjectCardContainer sqlite_project_id={this.props.sqlite_project_id} />
        <Link to="/projects/sqlite" className="project-button">Add Sqlite Project</Link>
        <Route path="/projects/sqlite" component={SqliteProjectForm} />
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
        <PostgresqlProjectCardContainer postgresql_project_id={this.props.postgresql_project_id} />
        <Link to="/projects/postgresql" className="project-button">Add PostgreSQL Project</Link>
        <Route path="/projects/postgresql" component={PostgresqlProjectForm} />
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