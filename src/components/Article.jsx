import React, { Component } from 'react';
import Layout from './Layout.jsx';
import Message from './Message.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Article extends Component {
  constructor() {
    super();
    this.removeContent = this.removeContent.bind(this);
    this.state = {
      files: '',
      title: '',
      slug: '',
      errors: false,
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
  titleCheck(event) {
    this.setState({title: event.target.value})
  }
  slugCheck(event) {
    this.setState({slug: event.target.value})
  }
  messageInfo(){
   this.setState({errors: true});
   setTimeout(function() { this.setState({errors: false}); }.bind(this), 5000);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xsOffset={2} xs={8} xsOffset={2}>
              <div className='input-title'>
                Article Title
              </div>
            </Col>
            <Col xsOffset={2} xs={8} xsOffset={2}>
              <input className='input-style' type='text' placeholder='Title of article here...' onChange={this.titleCheck.bind(this)}/>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={2} xs={8} xsOffset={2} smOffset={2} sm={4} >
              <div className='input-title'>
                Slug
              </div>
              <div>
                <input className='input-style' type='text' placeholder='First name...' onChange={this.slugCheck.bind(this)}/>
              </div>
            </Col>
            <Col xsOffset={2} xs={8} xsOffset={2} smOffset={0} sm={4}>
              <div className='input-title'>
                Featured Image
              </div>
              <div>
                <input className='input-style' disabled='disabled' placeholder='Drag & Drop or...' value={this.state.files}/>
              </div>
              <div>
                <label className='custom-file-input'>
                  <input type='file'  onChange={this.onChange.bind(this)} />
                </label>
              </div>
            </Col>
          </Row>
        </Grid>

        {this.state.errors && <Message data={this.state}/>}
        { this.state.count !== 0 && this.renderRemainders() }
        <div className='bottom-block'>
          <div className='add-new-content'>
            <div className='add-btn' onClick={() => {
              let title = this.state.title;
              let slug = this.state.slug;
              let files = this.state.files;
              if(title && slug && files){
                this.addContent()
              } else {
                this.messageInfo()
              }
            }}></div>
          </div>
          <p className='add-content'>
            ADD CONTENT
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
