import React, { useState } from 'react';
import { connect } from 'react-redux';
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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone Number"
          name="phone_number"
          value={user.phone_number}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default connect(null, { registerUser })(RegisterForm);