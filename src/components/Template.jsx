import React, { Component } from 'react';

class Template extends Component {
  render() {
    return (
      <div>
        <img src="../images/placeholder.gif" />
        <div className='btn btn-secondary d-block' onClick={() => this.onClick()}>
          add content +
        </div>
      </div>
    );
  }
}

export default Template;
