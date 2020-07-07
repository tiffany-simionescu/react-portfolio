import React, { Component } from 'react';
import Avatar from '../images/avatar.jpg';

// React Mdl
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              className="avatar-image"
              src={Avatar}
              alt="avatar"
              style={{ borderRadius: '50%'}}
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | JavaScript | KnexJS | React | Redux | NodeJS | Express | SQLite | PostgreSQL | Python</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/tiffanysimionescu/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/tiffany-simionescu" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/Tiffany-Simionescu-Full-Stack-Web-Developer-337217927229001" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/tsimionescu87" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;