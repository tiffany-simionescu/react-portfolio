import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

// Components
import Main from './components/Main';

// React MDL
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }}
        to='/'>Tiffany Simionescu</Link>} scroll>
              <Navigation>
                  <Link exact to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer className="drawer-link" title={<Link style={{ textDecoration: 'none', color: 'black' }}
        to='/'>My Portfolio</Link>}>
              <Navigation>
                  <Link exact to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
