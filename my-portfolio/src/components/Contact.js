import React, { Component } from 'react';
import Avatar from '../images/avatar.jpg';

// React Mdl
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tiffany Simionescu</h2>
            <img 
              src={Avatar}
              alt="avatar"
              style={{ height: '250px', borderRadius: '20px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim quam eu lacus laoreet elementum. Aenean nec nisi fermentum, vestibulum sem nec, pharetra leo. Praesent non leo sagittis mi tristique auctor. Etiam ac vulputate neque. Etiam lacinia bibendum eros eu vehicula. Phasellus dui enim, rutrum id libero et, molestie luctus.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
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

export default Contact;