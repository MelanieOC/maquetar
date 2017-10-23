import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col, Image, Button, ButtonGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import img1 from './img/agenda.png';
import img2 from './img/stylus.jpg';
import img3 from './img/evernote.png';
import StackedForm from './StackedForm.js'

const HeaderTable = () => {
  return (
    <Row>
      <Col xs={3} md={3}>
      </Col>
      <Col xs={4} md={4}>
      </Col>
      <Col xs={1} md={1}>
        Price
    </Col>
      <Col xs={2} md={2}>
        Quantity
    </Col>
      <Col xs={2} md={2}>
        Total
    </Col>
    </Row>
  );
}

const ContentTable = ({ img, title, content, price }) => {
  return (
    <Row>
      <Col xs={3} md={3}>
        <Image src={img} responsive />
      </Col>
      <Col xs={4} md={4}>
        <h2>{title}</h2>
        <p>{content}</p>
      </Col>
      <Col xs={1} md={1}>
        <div>
          <small>€</small>
          {price}
        </div>
      </Col>
      <Col xs={2} md={2}>
        1
      <ButtonGroup>
          <Button>-</Button>
          <Button>+</Button>
        </ButtonGroup>
      </Col>
      <Col xs={2} md={2}>
        <strong>
          <small>€</small>
          {price}
        </strong>
      </Col>
    </Row>
  );
}

const FooterTable = () => {
  return (
    <Row>
      <Col xs={3} md={3}>
        Total
      </Col>
      <Col xs={2} xsOffset={10} md={2} mdOffset={10}>
        <strong>
          <small>€</small>
          1846
      </strong>
      </Col>
    </Row>
  );
}
class App extends Component {
  render() {
    const title = (<HeaderTable />);
    const footer = (<FooterTable />);
    return (
      <div id= "tab">
      <Form horizontal>
              <h4>Stacked Form</h4>
              <ControlLabel>Email address</ControlLabel>
            <FormGroup controlId="formHorizontalEmail" >
              <Col sm={10}>
                <FormControl type="email" placeholder="Enter email" id ="inputs"/>
              </Col>
            </FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={10}>
                <FormControl  type="password" placeholder="Password" id ="inputs"/>
              </Col>
            </FormGroup>
        
            <FormGroup id="checkSuscribe">
              <Col smOffset={2} sm={10}>
                <Checkbox>Subscribe to newsletter</Checkbox>
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" id="btnSubmit">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
            </div>
            
      <div>
        <Panel collapsible defaultExpanded header={title} footer={footer}>
          <ListGroup fill>
            <ListGroupItem>
              <ContentTable img={img1} title={'Notebook'}
                content={'Most beautiful agenda for the office.'}
                price={49}
              />
            </ListGroupItem>
            <ListGroupItem>
              <ContentTable img={img2} title={'Stylus'}
                content={'Design is not just what it looks like and feels like. Design is how it works.'}
                price={499}
              />
            </ListGroupItem>
            <ListGroupItem>
              <ContentTable img={img3} title={'Evernote iPad Stander'}
                content={'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.'}
                price={799}
              />
            </ListGroupItem>
          </ListGroup>
        </Panel>
        <StackedForm />
      </div>
    );
  }
}

export default App;


