import React, { Component } from 'react';
import Section from './Section.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      choosen: [],
      layouts:[]
    };
  }

  chooseLayout(x, y) {
    this.setState({
      choosen:{title: x,uploaded: y}
    });
  }

  componentWillMount(){
    this.setState(
    {
      layouts: [
        { title: 'demo-icon icon-calltoaction', uploaded: false },
        { title: 'demo-icon icon-facebook', uploaded: false },
        { title: 'demo-icon icon-grid', uploaded: true },
        { title: 'demo-icon icon-imagefull', uploaded: true },
        { title: 'demo-icon icon-imageleft', uploaded: true },
        { title: 'demo-icon icon-imageright', uploaded: true },
        { title: 'demo-icon icon-quote', uploaded: false },
        { title: 'demo-icon icon-title+text', uploaded: false },
        { title: 'demo-icon icon-twitter', uploaded: true },
        { title: 'demo-icon icon-twocolumn', uploaded: false },
      ],
      choosen: {title:'', uploaded:false},
    });
  }

  render() {
    return (
      <div>
        { this.state.choosen.title ==='' &&
        <div>
          <div className='layout-block'>
            <Grid>
              <Row>
                <Col className='choose-your-layout-s'>Choose your layout style</Col>
              </Row>
              <Row>
                <Col className='layoutlist'>
                  {this.state.layouts.map((item,index) => (
                    <Col key={ index } xs={2}>
                      <div className='layout-icon-style' onClick={() => this.chooseLayout(item.title, item.uploaded)}>
                        { item.title == 'demo-icon icon-title+text' ? <i className={item.title}>&#xe808;</i> : <i className={item.title}>&nbsp;</i> }
                      </div>
                    </Col>
                  ))}
                </Col>
              </Row>
            </Grid>
          </div>
        </div>}
        { this.state.choosen.title !== '' && <Section removeContent={this.props.removeContent} data={{choosen:this.state.choosen, id:this.props.id}}/> }
      </div>
    );
  }
}

export default Layout;
