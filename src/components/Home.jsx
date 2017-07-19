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
        { this.state.show == false &&
          <div className='home'>
            <div className='news-manager'>NEWS MANAGER</div>
            <p className='placeholder-origin-f'>Placeholder origin for creating new News Articles</p>
            <div className='add-btn' onClick={() => this.onClick()}>
              <i className="demo-icon icon-add homeadd"></i>
            </div>
            <p className='new-article'>NEW ARTICLE</p>
          </div> }
        { this.state.show && <Article /> }
      </div>
    );
  }
}

export default Home;
