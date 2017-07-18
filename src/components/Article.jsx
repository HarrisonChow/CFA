import React, { Component } from 'react';
import Template from './Template.jsx';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };
  }
  onClick() {
    this.setState({step: 1});
  }

  render() {
    return (
      <div>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        { this.state.step === 1 ? <Template /> : null }
        <div className='btn btn-secondary d-block' onClick={() => this.onClick()}>
          add content +
        </div>
      </div>
    );
  }
}

export default Article;
