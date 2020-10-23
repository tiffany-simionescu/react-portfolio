import React, { Component } from 'react';

// React Mdl
import { Grid, Cell } from 'react-mdl';

class Experience3 extends Component {
  render() {
    return (
      <Grid>
        {/* Left Side */}
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>

        {/* Right Side */}
        <Cell col={8}>
          <h4 style={{ marginTop: '0px'}}>
            {this.props.jobTitle}
          </h4>
          <h5 style={{ marginTop: '0px' }}>
            {this.props.jobName}
          </h5>
          <ul>
            <li>{'\u2022'} {this.props.jobDescription1}</li>
            <li>{`\u2022`} {this.props.jobDescription2}</li>
            <li>{`\u2022`} {this.props.jobDescription3}</li>
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Experience3;