import React, { Component } from 'react';
import Section from './Section.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      choosen: [ title:'', uploaded:false ],
      layouts: [
        { title: 'demo-icon icon-imagefull', uploaded: true },
        { title: 'demo-icon icon-imageleft', uploaded: true },
        { title: 'demo-icon icon-imageright', uploaded: true },
        { title: 'demo-icon icon-title\+text', uploaded: true },
        { title: 'demo-icon Image(s)', uploaded: false },
        { title: 'others', uploaded: false },
      ]
    };
  }

  chooseLayout(x, y) {
    console.log(x);
    console.log(y);
  }

  render() {
    return (
      <div>
        { this.state.step === 0 &&
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
                      <div className='layout-icon-style' >
                        { item.title == 'demo-icon icon-title\+text' ? <i className={item.title}>&#xe804;</i> : <i className={item.title}>&nbsp;</i> }
                      </div>
                    </Col>
                  ))}
                </Col>
              </Row>
            </Grid>
          </div>
        </div>}
        { this.state.step === 1 && <Section up={this.state.layouts}/> }
      </div>
    );
  }
}

export default Layout;
