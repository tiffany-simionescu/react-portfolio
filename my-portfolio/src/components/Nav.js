import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import Main from './Main';

// React MDL
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function Nav(props) {
  return (
    <div className="navigation">
      <Layout>
          <Header className="header-color" title={<Link to='/'>Tiffany Simionescu</Link>} scroll>
              <Navigation>
                  <Link className="nav-link" to="/resume">Resume</Link>
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                  <Link className="nav-link" to="/register">Register</Link>
                  {!localStorage.getItem('token') ? (
                    <Link className="nav-link" to="/login" className="link">Login</Link>
                   ) : (
                    <Link className="nav-link" to="/" className="link"
                    onClick={() => props.logout()}>Log Out</Link>
                   )}
                  {/* {props.loggedIn ? null : (
                    <Link to="/register">Register</Link>
                  )}
                  {props.loggedIn ? (
                    <Link to="/" onClick={() => props.logout()}>Logout</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )} */}
              </Navigation>
          </Header>
          <Drawer className="drawer-link" title={<Link style={{ textDecoration: 'none', color: 'black' }}
        to='/'>Tiffany Simionescu</Link>}>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/register">Register</Link>
                  {!localStorage.getItem('token') ? 
                    <Link to="/login" className="link">Login</Link>
                    :
                    <Link to="/login" className="link"
                    onClick={() => props.logout()}>Log Out</Link>
                  }
                  {/* {props.loggedIn ? null : (
                    <Link to="/register">Register</Link>
                  )}
                  {props.loggedIn ? (
                    <Link to="/" onClick={() => props.logout()}>Logout</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )} */}
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { logout })(Nav);

// export default Nav;