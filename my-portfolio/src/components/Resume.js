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

          {/* Left Side */}
          <Cell className="resume-left-col" col={4}>
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
            <p>tsimionescu@gmail.com</p>
            <h5>Web</h5>
            <p>tiffanysimionescu.com</p>
            <hr />
          </Cell>

          {/* Right Side */}
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education
                startYear={2019}
                endYear="Current"
                schoolName="Lambda School"
                schoolDescription="Lambda School is a 6+ month 
                  Computer Science & Software Engineering Academy 
                  that provides an immersive hands-on curriculum 
                  with a focus on computer science, web and mobile 
                  development, UX design, and data science."
              />
              <Education
                startYear={2009}
                endYear={2010}
                schoolName=" Lynn College of Communication and Design"
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
                jobDescription1="Received calls from potential customers who were interested in applying for advance payday loans."
                jobDescription2="Gathered sensitive documentation for loan application processing to determine eligibility."
                jobDescription3="Reviewed all proper documentation and determined the rejection or approval of a loan application."
              />
              <Experience
                startYear={2010}
                endYear={2012}
                jobName="Sketch It Graphics"
                jobTitle="Graphic Designer | Secretary"
                jobDescription1="Developed and edited customer designs for marketing and fashion purposes."
                jobDescription2="Responsible for selling products and services to potential customers."
                jobDescription3="Managed the company's finances: Accounts Payable, Accounts Receivable department."
              />
              <Experience 
                startYear={2009}
                endYear={2009}
                jobName="Staples"
                jobTitle="Design and Print Associate"
                jobDescription1="Constructed and designed incoming print requests from customers."
                jobDescription2="Utilized various types of printers and graphic design software."
                jobDescription3="Provided excellent customer service by advising various print options based on the customer's needs."
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

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;