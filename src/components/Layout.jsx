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
        { title: 'Call To Action', classname:'calltoaction', uploaded: false },
        { title: 'Facebook Feed', classname:'facebook', uploaded: false },
        { title: 'Content Grid', classname:'grid', uploaded: true },
        { title: 'Image(s)', classname:'imagefull', uploaded: true },
        { title: 'Image Left', classname:'imageleft', uploaded: true },
        { title: 'Image Right', classname:'imageright', uploaded: true },
        { title: 'Quote', classname:'quote', uploaded: false },
        { title: 'Title & Text', classname:'titletext', uploaded: false },
        { title: 'Twitter Feed', classname:'twitter', uploaded: true },
        { title: 'Two Column Text', classname:'twocolumn', uploaded: false },
      ],
      choosen: {title:'', uploaded:false},
    });
  }

  render() {
    return (
      <div>
        { this.state.choosen.title ==='' &&
        <div>
          <div className='layout-block' id={this.props.id}>
            <Grid>
              <Row>
                <Col className='title-layout'>Choose your layout style</Col>
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
                          <div>
                            <div className={item.classname}></div>
                            <div className='layout-title'>
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Col>
              </Row>
            </Grid>
          </div>
        </div>}
        { this.state.choosen.title !== '' && <Section formDataRetrive={this.props.formDataRetrive} removeContent={this.props.removeContent} data={{choosen:this.state.choosen, id:this.props.id}}/> }
      </div>
    );
  }
}

export default Layout;
