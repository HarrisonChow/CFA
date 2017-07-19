import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      show: 0,
    };
  }
  onClick() {
    this.setState({show: 1});
  }

  delete() {
    this.setState({show: 1});
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
              <Col><input className='rectangle-388-copy-8' type='text'/></Col>
            </Row>
            <Row>
              <Col><div className='article-title'>Content</div></Col>
              <Col><textarea className='section-content' type='text'/></Col>
            </Row>
            {this.props.data.uploaded &&
            <Row>
              <Col><div className='article-title'>Content</div></Col>
              <Col><input className='rectangle-388-copy-8' type='file'/></Col>
            </Row>}

          </Grid>
        </div>
      </div>
    );
  }
}

export default Section;
