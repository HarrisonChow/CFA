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
  console.log(this);
    return (
      <div>
        <div className='section-block'>
          <Grid>
            <Row className='section-title'>
              <Col xsOffset={4} xs={4} className='title-section'>
                {this.props.data.choosen.title}
              </Col>
              <Col xs={4}>
                <div className='delete-btn' onClick={() => this.delete()}>
                  DELETE SECTION
                </div>
              </Col>
            </Row>
            {this.props.data.choosen.title !=='Image(s)' &&
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='input-title'>
                  Section Title
                </div>
              </Col>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <input className='input-style' type='text' placeholder='Title of article here...'/>
              </Col>
            </Row>}
            {this.props.data.choosen.title !=='Image(s)' &&
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='input-title'>
                  Content
                </div>
              </Col>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <textarea className='section-content' type='text' placeholder='Your content goes here...'/>
              </Col>
            </Row>}
            {this.props.data.choosen.uploaded &&
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='input-title'>
                  Image
                </div>
                <div>
                  <input className='input-style' disabled='disabled' value={this.state.files} placeholder='Drag & Drop or...'/>
                </div>
                <div>
                  <label className='custom-file-input'>
                    <input type='file'  onChange={this.onChange.bind(this)}/>
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
