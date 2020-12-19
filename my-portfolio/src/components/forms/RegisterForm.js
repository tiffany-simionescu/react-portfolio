import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/userActions';

// Add style later

const RegisterForm = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
  }); 

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.registerUser(user, props);
  };

  return (
    <div className="register-box-background">
    <div className="register-box">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="user-box">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
          <label>First Name</label>
        </div>

        <div className="user-box">
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
          />
          <label>Last Name</label>
        </div>

        <div className="user-box">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <div className="user-box">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div className="user-box">
          <input
            type="number"
            placeholder="Phone Number"
            name="phone_number"
            value={user.phone_number}
            onChange={handleChange}
          />
          <label>Phone Number</label>
        </div>

        <button className="project-button">Register</button>
      </form>

      <p className="have-account">Have an Account?
        <Link to="/login" className="have-account-link"> Login</Link>
      </p>
    </div>
    </div>
  );
};

// export default connect(null, { registerUser })(RegisterForm);
const mapStatetoProps = state => {
  return {
    loggedIn: state.isLoggedIn
  };
};

export default connect(mapStatetoProps, { registerUser })(RegisterForm);