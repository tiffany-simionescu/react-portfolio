import React, { Component } from 'react';
import Avatar from '../../images/avatar.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import { Link } from 'react-router-dom';

// React Mdl
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>

          {/* Left Side */}
          <Cell className="resume-left-col" col={4}>
            {/* <div style={{ textAlign: 'center' }}>
              <img 
                src={Avatar}
                alt="avatar"
                style={{ height: '200px', borderRadius: '50%' }}
              />
            </div> */}

            <h2 style={{ paddingTop: '0.5em' }}>
              Tiffany Simionescu
            </h2>
            <h4 style={{ color: 'grey'}}>
              Web Developer
            </h4>
            <hr />
            <p>I love learning about new design elements for website 
               presence, and innovative ways to enhance my code. Helping 
               my clients to achieve their desired look and database 
               functionality for their online business is something I’m 
               very passionate about. </p>
            <hr />
            <h5>Address</h5>
            <p>Easley, SC 29642</p>
            <h5>Phone</h5>
            <p>(864) 283-5263</p>
            <h5>Email</h5>
            <p>tiffany.simionescu@gmail.com</p>
            <h5>Web</h5>
            <Link 
              to="/" 
              className="project-button resume-button">
                tiffanysimionescu.com
            </Link>
            <hr />
          </Cell>

          {/* Right Side */}
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education
                startYear={2019}
                endYear="Current"
                schoolName="Lambda School"
                schoolDescription="Lambda School is a 9+ month computer 
                science & software engineering program that provides an 
                immersive hands-on curriculum with a focus on computer 
                science, and full-stack web development. "
              />
              <Education
                startYear={2009}
                endYear={2010}
                schoolName=" Lynn College of Communication and Design 
                (formally known as Digital Media Arts College)"
                schoolDescription="Lynn College of Communication and 
                Design offers specialized Bachelor of Fine Arts degrees 
                in Computer Animation and Graphic Design as well as 
                Master of Fine Arts degrees in Visual Effects Animation 
                and Web Design"
              />

            <hr />

            <h2>Experience</h2>
              <Experience
                startYear={2012}
                endYear={2013}
                jobName="Advanced Cash Fast"
                jobTitle="Loan Processing Clerk"
                jobDescription1="Received calls from potential customers interested in applying for loans."
                jobDescription2="Gathered sensitive documents for loan processing to determine eligibility."
                jobDescription3="Reviewed all proper documents and determined rejection or approval of a loan."
              />
              <Experience
                startYear={2010}
                endYear={2012}
                jobName="Sketch It Graphics"
                jobTitle="Graphic Designer | Secretary"
                jobDescription1="Developed and edited customer designs for marketing and fashion purposes."
                jobDescription2="Operated a wide variety of printers for clothing design and screen printing."
                jobDescription3="Managed the company's finances: Accounts Payable, Accounts Receivable."
              />
              <Experience 
                startYear={2009}
                endYear={2009}
                jobName="Staples"
                jobTitle="Design and Print Associate"
                jobDescription1="Developed and edited customer designs for marketing and fashion purposes."
                jobDescription2="Operated a wide variety of printers for clothing design and screen printing."
                jobDescription3="Responsible for selling products and services to potential customers."
              />

            <hr />

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
            <Skills 
              skill="PostgreSQL"
              progress="90"
            />
            <Skills 
              skill="Python"
              progress="87"
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;