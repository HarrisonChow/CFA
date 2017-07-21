import React, { Component } from 'react';
import Article from './Article.jsx';
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  onClick() {
    this.setState({show: true});
  }

  render() {
    return (
      <div>
        <div className='header'>
          <div className='logo'></div>
          <input className='search' placeholder='Search...'/>
        </div>
        { this.state.show == false &&
          <div className='home'>
            <div className='title'>
              NEWS MANAGER
            </div>
            <p className='subtitle'>
              Placeholder origin for creating new News Articles
            </p>
            <div className='add-new-article'>
              <div className='add-btn' onClick={() => this.onClick()}></div>
            </div>
            <p className='new-article'>
              NEW ARTICLE
            </p>
          </div> }
        { this.state.show && <Article /> }
      </div>
    );
  }
}

export default Home;
