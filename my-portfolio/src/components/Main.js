import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './resume/Resume';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import ReactProjectForm from './forms/ReactProjectForm';
import ReduxProjectForm from './forms/ReduxProjectForm';
import NodeProjectForm from './forms/NodeProjectForm';
import SqliteProjectForm from './forms/SqliteProjectForm';
import PostgresqlProjectForm from './forms/PostgresqlProjectForm';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/projects/react" component={ReactProjectForm} />
    <Route path="/projects/redux" component={ReduxProjectForm} />
    <Route path="/projects/node" component={NodeProjectForm} />
    <Route path="/projects/sqlite" component={SqliteProjectForm} />
    <Route path="/projects/postgresql" component={PostgresqlProjectForm} />
  </Switch>
)

export default Main;