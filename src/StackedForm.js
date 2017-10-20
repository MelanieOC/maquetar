import React, {Component} from 'react';
import logo from './logo.svg';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  ControlLabel,
  Checkbox,
  FormControl,
  bsStyle
} from 'react-bootstrap';
import './App.css';

const StackedForm = () => {
  return (
    <Grid className="card">
      <Col sm={12}>
        <h4>Stacked Form</h4>
      </Col>
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              placeholder="Email"
              className="form-control"
              autoComplete="off"/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password"/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox id="b2a2c1ba0e67d">Suscribe to newsletter</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" bsStyle="info">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>

    </Grid>

  );
}

export default StackedForm;