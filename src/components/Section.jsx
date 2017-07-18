import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class Section extends Component {
  render() {
    return (
      <div>
        <div className='section-block'>
          <Grid>

            <Row className='section-title'>
              <Col xsOffset={4} xs={4}>Text & Title</Col>
              <Col xs={4}><a href="#"><div className='delete-btn'>DELETE SECTION</div></a></Col>
            </Row>
            <Row>
              <Col><div className='article-title'>Section Title</div></Col>
              <Col><input className='rectangle-388-copy-8' type='text'/></Col>
            </Row>
            <Row>
              <Col><div className='article-title'>Content</div></Col>
              <Col><textarea className='section-content' type='text'/></Col>
            </Row>
          </Grid>
        </div>
        <div className='add-btn' onClick={() => this.onClick()}>
          <img className='add' src='../images/plus-grey.png'/>
        </div>
        <p className='add-content'>NEW CONTENT</p>
      </div>
    );
  }
}

export default Section;
