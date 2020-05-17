import React, { Component } from 'react';

// React Mdl
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
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
            {this.props.jobName}
          </h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;