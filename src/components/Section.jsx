import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class Section extends Component {
  constructor() {
    super();
  }

  delete() {
    this.props.removeContent();
  }

  render() {
    return (
      <div>
        <div className='section-block'>
          <Grid>
            <Row className='section-title'>
              <Col xsOffset={4} xs={4}>Text & Title</Col>
              <Col xs={4}><div className='delete-btn' onClick={() => this.delete()}>DELETE SECTION</div></Col>
            </Row>
            <Row>
              <Col><div className='article-title'>Section Title</div></Col>
              <Col><input className='input-style' type='text'/></Col>
            </Row>
            <Row>
              <Col><div className='article-title'>Content</div></Col>
              <Col><textarea className='section-content' type='text'/></Col>
            </Row>
            {this.props.data.choosen.uploaded &&
            <Row>
              <Col><div className='article-title'>Content</div></Col>
              <Col><input className='input-style' type='file'/></Col>
            </Row>}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Section;
