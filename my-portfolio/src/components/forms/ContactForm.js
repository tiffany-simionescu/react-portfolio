import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

// React Mdl
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      name: '',
      email: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    emailjs.send('gmail','template_dWaijdid', this.state, 'user_IlZyzJhy7n0poMp73csQD')
    .then(res => {
       console.log('SUCCESS!', res.status, res.text);
       alert("Email sent successfully!")
    }, (err) => {
       console.error('FAILED...', err);
       alert("Failed to send. Please try again.")
    });
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({
      [param]: e.target.value
    });
  }

  render() {
    return (
      <div className="contact-body">
        <h2>Contact Me</h2>
        {/* <hr /> */}
        <Grid className="contact-grid">
          <Cell col={6} style={{ width: "500px", marginRight: "30px"}}>
            {/* <h2>Contact Me</h2> */}
            {/* <hr /> */}
            <p style={{ width: '90%', margin: '20px auto', paddingTop: '1em' }}>
              If you have any questions or comments, please fill out the form below.
              I would love to hear from you. Thank you, and have a wonderful day!
            </p>

            <div className="email-form">
            <form onSubmit={this.handleSubmit}>
                <div>
                  {/* <label>Name:</label> */}
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder="Name"
                    required
                    value={this.state.name}  
                  />
                </div>
                <div>
                  {/* <label>Email:</label> */}
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="Email Address"
                    required
                    value={this.state.email}  
                  />
                </div>
                <div>
                  {/* <label>Message:</label> */}
                  <textarea 
                    rows="5"
                    cols="40"
                    name="message"
                    onChange={this.handleChange.bind(this, 'message')}
                    placeholder="Message..."
                    required
                    value={this.state.message}
                  />
                </div>
                <button variant="primary" type="submit">
                  Send
                </button>
              </form>
            </div>

          </Cell>
           <Cell col={6}>
            {/* <h2>Tiffany Simionescu</h2> */}
            {/* <hr /> */}

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '16px', verticalAlign: "middle" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" style={{ fontSize: "40px" }} />
                    (854) 283-5263
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '16px' }}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: "40px" }} />
                    tiffany.simionescu@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '16px' }}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{ fontSize: "40px" }} />
                    /in/tiffanysimionescu/
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '16px' }}>
                    <i className="fa fa-github-square" aria-hidden="true" style={{ fontSize: "40px" }} />
                    tiffany-simionescu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '16px' }}>
                    <i className="fa fa-facebook-square" aria-hidden="true" style={{ fontSize: "40px" }} />
                    <a href="https://www.facebook.com/Tiffany-Simionescu-Full-Stack-Web-Developer-337217927229001"
                      target="_blank">
                      Facebook Page
                    </a>
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{ fontSize: '16px' }}>
                    <i className="fa fa-twitter-square" aria-hidden="true" style={{ fontSize: "40px" }} />
                    tsimionescu87
                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default ContactForm;