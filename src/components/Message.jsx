import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Message extends Component {
  render() {
    return (
      <div className='message'>
        <Alert bsStyle="danger">
          {this.props.data.files ===''? <div>Please upload images!</div> : ''}
          {this.props.data.title ===''? <div>Please input title!</div> : ''}
          {this.props.data.slug ===''?  <div>Please input slug!</div> : ''}
        </Alert>
      </div>
    );
  }
}

export default Message;
