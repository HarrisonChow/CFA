import React, { Component } from 'react';
import Section from './Section.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };
  }
  onClick() {
    this.setState({step: 1});
  }
  render() {
    return (
      <div>
        { this.state.step === 0 ?
        <div>
          <div className='layout-block'>
            <Grid>
              <Row>
                <Col className='choose-your-layout-s'>Choose your layout style</Col>
                <Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                </Col>
                <Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                  <Col xs={2}><img src='../images/placeholder.gif' className='layout-style'/></Col>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className='add-btn' onClick={() => this.onClick()}>
            <img className='add' src='../images/plus-grey.png'/>
          </div>
          <p className='add-content'>NEW CONTENT</p>
        </div>
        : null }
        { this.state.step === 1 ? <Section /> : null }
      </div>
    );
  }
}

export default Layout;
