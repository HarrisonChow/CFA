import React, { Component } from 'react';
import Section from './Section.jsx';
import { Grid, Col, Row } from 'react-bootstrap';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      choosen: [],
      layouts:[],
    };
  }

  chooseLayout(x, y) {
    this.setState({
      choosen:{title: x,uploaded: y},
    })
  }

  componentWillMount(){
    this.setState(
    {
      layouts: [
        { title: 'demo-icon icon-calltoaction', cls:'calltoaction', uploaded: false },
        { title: 'demo-icon icon-facebook', cls:'facebook', uploaded: false },
        { title: 'demo-icon icon-grid', cls:'grid', uploaded: true },
        { title: 'demo-icon icon-imagefull', cls:'imagefull', uploaded: true },
        { title: 'demo-icon icon-imageleft', cls:'imageleft', uploaded: true },
        { title: 'demo-icon icon-imageright', cls:'imageright', uploaded: true },
        { title: 'demo-icon icon-quote', cls:'quote', uploaded: false },
        { title: 'demo-icon icon-title+text', cls:'titletext', uploaded: false },
        { title: 'demo-icon icon-twitter', cls:'twitter', uploaded: true },
        { title: 'demo-icon icon-twocolumn', cls:'twocolumn', uploaded: false },
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
                  {this.state.layouts.map((item,index) => {
                    let m = index === 0 || index === 5 ? 1 : 0;
                    let n = index === 9 ? 4 : 0;
                    let q = index % 2 === 0 ? 1 : 0;
                    return (
                      <Col key={ index } lgOffset={m} lg={2} xsOffset={q} xs={5} mdOffset={n} md={4}>
                        <div className='layout-icon-style' onClick={() => this.chooseLayout(item.title, item.uploaded)}>
                          <div className={item.cls}></div>
                        </div>
                      </Col>
                    );
                  })}
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
