import React, { Component } from 'react';
import Article from './Article.jsx';

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
          <div className="form">
            <div className='btn btn-secondary d-block' onClick={() => this.onClick()}>
              new article +
            </div>
          </div>
        : null }
        { this.state.step === 1 ? <Article /> : null }
      </div>
    );
  }
}

export default Home;
