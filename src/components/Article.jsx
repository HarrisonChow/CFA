import React, { Component } from 'react';
import Layout from './Layout.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Article extends Component {
  constructor() {
    super();
    this.removeContent = this.removeContent.bind(this);
    this.state = {
      files:'',
      count:0,
      id: 1,
      sectionId: []
    };
  }
  addContent(){
    this.setState({
      id: this.state.id + 1
    })
    let ids=this.state.sectionId
    ids.push(this.state.id)
    this.setState(
    {
      count: this.state.count + 1,
      sectionId:ids
    });
  }
  removeContent(){
    this.setState(
    {
      count: this.state.count - 1
    });
  }
  renderRemainders() {
    let articles = []
    let total = this.state.count
    for (let i = 0; i < total; i++){
      articles.push( <Layout removeContent={this.removeContent} key={i} id={this.state.count}/> )
    }
    return articles
  }

  onChange(event) {
    this.setState({files: event.target.value})
  }


  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xsOffset={2} xs={8} xsOffset={2}><div className='article-title'>Article Title</div></Col>
            <Col xsOffset={2} xs={8} xsOffset={2}><input className='input-style' type='text'/></Col>
          </Row>
          <Row>
            <Col xsOffset={2} xs={8} xsOffset={2} smOffset={2} sm={4} >
              <div className='article-title'>Slug</div>
              <input className='input-style' type='text'/>
            </Col>
            <Col>

              <Col xsOffset={2} xs={8} xsOffset={2} smOffset={0} sm={4}>
                <div className='article-title'>Featured Image</div>
                <div>
                  <input className='input-style' disabled='disabled' value={this.state.files}/>
                </div>
                <div>
                  <label className='custom-file-input'>
                  <input type='file'  onChange={this.onChange.bind(this)}  />
                  </label>
                </div>
              </Col>
            </Col>
          </Row>
        </Grid>
        { this.state.count !== 0 && this.renderRemainders() }
        <div className='bottom-block'>
          <div className='add-btn' onClick={() => this.addContent()}>
            <i className='demo-icon icon-add add'></i>
          </div>
          <p className='add-content'>NEW CONTENT</p>
        </div>
      </div>
    );
  }
}

export default Article;
