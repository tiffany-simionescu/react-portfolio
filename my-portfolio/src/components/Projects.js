import React, { Component } from 'react';

// React Mdl 
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0
    }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>React Project 1</CardTitle>  
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mi at lacus tempus sodales. Praesent placerat in risus a facilisis. Phasellus a lectus quis ex aliquam mattis. Ut est magna, pretium in ullamcorper non, mattis a massa. Praesent at tempor dolor, ornare elementum erat. Ut libero turpis, vestibulum at.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>React Project 2</CardTitle>  
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mi at lacus tempus sodales. Praesent placerat in risus a facilisis. Phasellus a lectus quis ex aliquam mattis. Ut est magna, pretium in ullamcorper non, mattis a massa. Praesent at tempor dolor, ornare elementum erat. Ut libero turpis, vestibulum at.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

        {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>React Project 3</CardTitle>  
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mi at lacus tempus sodales. Praesent placerat in risus a facilisis. Phasellus a lectus quis ex aliquam mattis. Ut est magna, pretium in ullamcorper non, mattis a massa. Praesent at tempor dolor, ornare elementum erat. Ut libero turpis, vestibulum at.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
      </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;