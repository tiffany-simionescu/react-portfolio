import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';

const LoginForm = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(user, props);
  };

  return (
    <div className="login-box-background">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input 
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange} 
            />
            <label>Password</label>
          </div>
          <button type="submit" className="project-button">Login</button>
        </form>
        
        <p className="no-account">No Account?
          <Link to="/#/register" className="no-account-link"> Create One</Link>
        </p>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
}

export default connect(mapStatetoProps, { login })(LoginForm);