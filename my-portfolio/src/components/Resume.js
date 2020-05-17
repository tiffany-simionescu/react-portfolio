import React, { Component } from 'react';
import Avatar from '../images/avatar.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

// React Mdl
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={Avatar}
                alt="avatar"
                style={{ height: '200px', borderRadius: '50%' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>
              Tiffany Simionescu
            </h2>
            <h4 style={{ color: 'grey'}}>
              Programmer
            </h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim quam eu lacus laoreet elementum. Aenean nec nisi fermentum, vestibulum sem nec, pharetra leo. Praesent non leo sagittis mi tristique auctor. Etiam ac vulputate neque. Etiam lacinia bibendum eros eu vehicula. Phasellus dui enim, rutrum id libero et, molestie luctus.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Easley, SC 29642</p>
            <h5>Phone</h5>
            <p>(864) 283-5263</p>
            <h5>Email</h5>
            <p>tsimionescu@gmail.com</p>
            <h5>Web</h5>
            <p>tiffanysimionescu.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education
                startYear={2011}
                endYear={2010}
                schoolName="My First University"
                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus euismod venenatis. Fusce scelerisque eros sit amet tellus dignissim viverra. Pellentesque euismod molestie velit ac."
              />
              <Education
                startYear={2012}
                endYear={2013}
                schoolName="My Second University"
                schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus euismod venenatis. Fusce scelerisque eros sit amet tellus dignissim viverra. Pellentesque euismod molestie velit ac."
              />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>
              <Experience
                startYear={2013}
                endYear={2014}
                jobName="My First Job"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus euismod venenatis. Fusce scelerisque eros sit amet tellus dignissim viverra. Pellentesque euismod molestie velit ac."
              />
              <Experience
                startYear={2014}
                endYear={2015}
                jobName="My Second Job"
                jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus euismod venenatis. Fusce scelerisque eros sit amet tellus dignissim viverra. Pellentesque euismod molestie velit ac."
              />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Skills</h2>
            <Skills 
              skill="HTML/CSS"
              progress="100"
            />
            <Skills 
              skill="JavaScript"
              progress="90"
            />
            <Skills
              skill="React"
              progress="95"
            />
            <Skills
              skill="NodeJS"
              progress="90"
            />
            <Skills
              skill="Express"
              progress="95"
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;