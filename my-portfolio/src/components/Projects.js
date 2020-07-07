import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import ReactProjectCardContainer from './containers/ReactProjectCardContainer';
import ReduxProjectCardContainer from './containers/ReduxProjectCardContainer';
import NodeProjectCardContainer from './containers/NodeProjectCardContainer';
import SqliteProjectCardContainer from './containers/SqliteProjectCardContainer';
import PostgresqlProjectCardContainer from './containers/PostgresqlProjectCardContainer';
import PythonProjectCardContainer from './containers/PythonProjectCardContainer';

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
        <div className="projects-grid" id="react">
          {/* {this.props.react_projects &&
            // this.props.react_projects.map((react_project, index) => (
              // <ReactProjectCard key={index} react_project={react_project} />
              <ReactProjectCardContainer react_project-id={index} react_project={react_project} />
            ))} */}
            <ReactProjectCardContainer />
          {/* <ReactProjectCardContainer react_project_id={this.props.react_project_id} /> */}
          <Link to="/addreact" className="project-button">Add React Project</Link>
        </div>
      )

    // Redux Projects
    } else if (this.state.activeTab === 1) {

      // useEffect(() => {
      //   this.props.fetchReduxProjects(this.props.redux_project_id);
      // }, []);

      return (
        <div className="projects-grid" id="redux">
          {/* {this.props.redux_projects &&
            this.props.redux_projects.map((redux_project, index) => (
              <ReduxProjectCard key={index} redux_project={redux_project} />
            ))} */}
          <ReduxProjectCardContainer />
          <Link to="/addredux" className="project-button">Add Redux Project</Link>
        </div>
      )

    // Node Projects
    } else if (this.state.activeTab === 2) {

      // useEffect(() => {
      //   this.props.fetchNodeProjects(this.props.node_project_id);
      // }, []);

      return (
        <div className="projects-grid" id="node">
          {/* {this.props.node_projects &&
            this.props.node_projects.map((node_project, index) => (
              <NodeProjectCard key={index} node_project={node_project} />
            ))} */}
            <NodeProjectCardContainer />
            <Link to="/addnode" className="project-button">Add Node Project</Link>
        </div>
      )

    // Sqlite Projects
  } else if (this.state.activeTab === 3) {

    // useEffect(() => {
    //   this.props.fetchSqliteProjects(this.props.sqlite_project_id);
    // }, []);

    return (
      <div className="projects-grid" id="sqlite">
        {/* {this.props.sqlite_projects &&
          this.props.sqlite_projects.map((sqlite_project, index) => (
            <SqliteProjectCard key={index} sqlite_project={sqlite_project} />
          ))} */}
        <SqliteProjectCardContainer />
        <Link to="/addsqlite" className="project-button">Add Sqlite Project</Link>
      </div>
    )

    // PostgreSQL Projects
  } else if (this.state.activeTab === 4) {

    // useEffect(() => {
    //   this.props.fetchPostgresqlProjects(this.props.postgresql_project_id);
    // }, []);

    return (
      <div className="projects-grid" id="postgresql">
        {/* {this.props.postgresql_projects &&
          this.props.postgresql_projects.map((postgresql_project, index) => (
            <PostgresqlProjectCard key={index} postgresql_project={postgresql_project} />
          ))} */}
        <PostgresqlProjectCardContainer />
        <Link to="/addpostgresql" className="project-button">Add PostgreSQL Project</Link>
      </div>
    )
    } else if (this.state.activeTab === 5) {

      // useEffect(() => {
      //   this.props.fetchPostgresqlProjects(this.props.postgresql_project_id);
      // }, []);
  
      return (
        <div className="projects-grid" id="python">
          {/* {this.props.postgresql_projects &&
            this.props.postgresql_projects.map((postgresql_project, index) => (
              <PostgresqlProjectCard key={index} postgresql_project={postgresql_project} />
            ))} */}
          <PythonProjectCardContainer />
          <Link to="/addpython" className="project-button">Add Python Project</Link>
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
          <Tab>Python</Tab>
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

// const mapStateToProps = state => {
//   return {
//     react_project: state.redux_project,
//     redux_project: state.redux_project,
//     node_project: state.node_project,
//     sqlite_project: state.sqlite_project,
//     postgresql_project: state.postgresql_project
//   };
// };

// export default connect(mapStateToProps, {})(Projects);

export default Projects;