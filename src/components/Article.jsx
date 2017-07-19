import React, { Component } from 'react';
import Layout from './Layout.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      count: 0
    };
  }
  onClick() {
    this.setState({step: 1});
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col><div className='article-title'>Article Title</div></Col>
            <Col><input className='rectangle-388-copy-8' type='text'/></Col>
          </Row>
          <Row>
            <Col>
              <Col xs={6}><div className='article-title'>Slug</div></Col>
              <Col xs={6}><div className='article-title'>Featured Image</div></Col>
            </Col>
            <Col>
              <Col xs={6}><input className='rectangle-388-copy-6' type='text'/></Col>
              <Col xs={6}>
                <input className='rectangle-388-copy-6' type='file'/>
              </Col>
            </Col>
          </Row>
        </Grid>
        { this.state.step === 1 && <Layout /> }

        <div className='bottom-block'>
          <div className='add-btn' onClick={() => this.onClick()}>
            <i className='demo-icon icon-add add'></i>
          </div>
          <p className='add-content'>NEW CONTENT</p>
        </div>

      </div>
    );
  }
}

export default Article;
