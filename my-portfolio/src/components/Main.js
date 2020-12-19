import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContactForm from './forms/ContactForm';
import Projects from './Projects';
import Resume from './resume/Resume';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import ReactProjectForm from './forms/ReactProjectForm';
import ReduxProjectForm from './forms/ReduxProjectForm';
import SqliteProjectForm from './forms/SqliteProjectForm';
import PostgresqlProjectForm from './forms/PostgresqlProjectForm';
import PythonProjectForm from './forms/PythonProjectForm';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={ContactForm} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/addreact" component={ReactProjectForm} />
    <Route path="/addredux" component={ReduxProjectForm} />
    <Route path="/addsqlite" component={SqliteProjectForm} />
    <Route path="/addpostgresql" component={PostgresqlProjectForm} />
    <Route path="/addpython" component={PythonProjectForm} />
  </Switch>
)

export default Main;