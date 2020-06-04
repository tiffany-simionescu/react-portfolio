import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';

// Add Style later

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
}

export default connect(mapStatetoProps, { login })(LoginForm);