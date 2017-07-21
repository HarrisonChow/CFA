import React, { Component } from 'react';
import Layout from './Layout.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Article extends Component {
  constructor() {
    super();
    this.removeContent = this.removeContent.bind(this);
    this.state = {
      files:'',
      sessionIds: [],
    };
  }
  addContent(){
    const sessionIds = this.state.sessionIds;
    const id = sessionIds.length ? sessionIds[sessionIds.length - 1] + 1 : 0;
    sessionIds.push(id)
    this.setState({sessionIds});
  }
  removeContent(id){
    const sessionIds = this.state.sessionIds;
    this.setState({sessionIds: sessionIds.filter((sessionId) => id !== sessionId)});
  }
  renderRemainders() {
    const sessionIds = this.state.sessionIds;
    return sessionIds.map((id) => (
      <Layout removeContent={() => this.removeContent(id)} key={id} id={id}/>
    ))
  }

  onChange(event) {
    this.setState({files: event.target.value})
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xsOffset={2} xs={8} xsOffset={2}>
              <div className='article-title'>
                Article Title
              </div>
            </Col>
            <Col xsOffset={2} xs={8} xsOffset={2}>
              <input className='input-style' type='text'/>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={2} xs={8} xsOffset={2} smOffset={2} sm={4} >
              <div className='article-title'>
                Slug
              </div>
              <div>
                <input className='input-style' type='text'/>
              </div>
            </Col>
            <Col xsOffset={2} xs={8} xsOffset={2} smOffset={0} sm={4}>
              <div className='article-title'>
                Featured Image
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
          </Row>
        </Grid>
        { this.state.count !== 0 && this.renderRemainders() }
        <div className='bottom-block'>
          <div className='add-new-content'>
            <div className='add-btn' onClick={() => this.addContent()}></div>
          </div>
          <p className='add-content'>
            NEW CONTENT
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
