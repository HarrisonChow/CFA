import React, { Component } from 'react';
import Article from './Article.jsx';
import { Button } from 'react-bootstrap';

class Home extends Component {
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
    console.log(this.state.step);
    return (
      <div>
        { this.state.step === 0 ?
          <div className='home'>
            <div className='news-manager'>NEWS MANAGER</div>
            <p className='placeholder-origin-f'>Placeholder origin for creating new News Articles</p>
            <div className='add-btn' onClick={() => this.onClick()}>
              <img className='add' src='../images/plus.png'/>
            </div>
            <p className='new-article'>NEW ARTICLE</p>
          </div>
        : null }
        { this.state.step === 1 ? <Article /> : null }
      </div>
    );
  }
}

export default Home;
