import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Layout extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col className='choose-your-layout-s'>Choose your layout style</Col>
            <Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
            </Col>
            <Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
              <Col xs={2}><img src="../images/placeholder.gif" className="layout-style"/></Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
