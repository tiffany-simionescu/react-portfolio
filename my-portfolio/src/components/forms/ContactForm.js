import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

// React Mdl
import { Grid, Cell, List, ListItem, ListItemContent, Button } from 'react-mdl';

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
    }, (err) => {
       console.error('FAILED...', err);
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
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <p style={{ width: '75%', margin: '20px auto', paddingTop: '1em' }}>
              If you have any questions or comments, please fill out the form below.
              I would love to hear from you. Thank you, and have a wonderful day!
            </p>

            <div className="email-form">
            <Form onSubmit={this.handleSubmit}>
                <div>
                  <label>Name:</label>
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
                  <label>Email:</label>
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
                  <label>Message:</label>
                  <input
                    type="textarea"
                    name="message"
                    onChange={this.handleChange.bind(this, 'message')}
                    placeholder="Message"
                    required
                    value={this.state.message}  
                  />
                </div>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </div>

          </Cell>
          <Cell col={6}>
            <h2>Tiffany Simionescu</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (854) 283-5263
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-fax" aria-hidden="true" />
                    (854) 283-5263
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    tsimionescu@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    My-Skype-Id
                  </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default ContactForm;