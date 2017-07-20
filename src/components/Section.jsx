import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      files:'',
    };
  }
  onChange(event) {
    this.setState({files: event.target.value})
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
              <Col xsOffset={4} xs={4}>
                Text & Title
              </Col>
              <Col xs={4}>
                <div className='delete-btn' onClick={() => this.delete()}>
                  DELETE SECTION
                </div>
              </Col>
            </Row>
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='article-title'>
                  Section Title
                </div>
              </Col>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <input className='input-style' type='text'/>
              </Col>
            </Row>
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='article-title'>
                  Content
                </div>
              </Col>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <textarea className='section-content' type='text'/>
              </Col>
            </Row>
            {this.props.data.choosen.uploaded &&
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='article-title'>
                  Image
                </div>
                <div>
                  <input className='input-style' disabled='disabled' value={this.state.files}/>
                </div>
                <div>
                  <label className='custom-file-input'>
                    <input type='file'  onChange={this.onChange.bind(this)}  />
                  </label>
                </div>
              </Col>
            </Row>}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Section;
