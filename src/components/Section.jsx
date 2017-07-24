import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      image:'',
      sectionData:{title:'', content:'', image:''}
    };
  }
  changeImage(event) {
    this.setState({image: event.target.value})
  }

  delete() {
    this.props.removeContent();
  }

  changeInput(event) {
    this.state.sectionData[event.target.name] = event.target.value;
    this.setState({sectionData: this.state.sectionData});
    this.props.formDataRetrive(this.props.data.id, this.state.sectionData);
  }

  render() {

    return (
      <div>
        <div className='section-block' id={this.props.data.id}>
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
                <input name='title' className='input-style' type='text' value={this.state.sectionData.title} placeholder='Title of article here...' onChange={this.changeInput.bind(this)}/>
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
                <textarea name='content' className='section-content' value={this.state.sectionData.content} type='text' placeholder='Your content goes here...' onChange={this.changeInput.bind(this)}/>
              </Col>
            </Row>}
            {this.props.data.choosen.uploaded &&
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <div className='input-title'>
                  Image
                </div>
                <div>
                  <input className='input-style' disabled='disabled' value={this.state.sectionData.image} placeholder='Drag & Drop or...'/>
                </div>
                <div>
                  <label className='custom-file-input'>
                    <input name='image' type='file'  onChange={this.changeInput.bind(this)}/>
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
