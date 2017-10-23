import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button, ButtonGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
import img1 from './img/agenda.png';
import img2 from './img/stylus.jpg';
import img3 from './img/evernote.png';

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
            <Col xs={2} md={2}>
                <div className='img-container'>
                    <Image src={img} responsive />
                </div>
            </Col>
            <Col xs={5} md={5}>
                <strong>{title}</strong>
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
                    <Button bsSize="small">-</Button>
                    <Button bsSize="small">+</Button>
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
                    <span>1846</span>
                </strong>
            </Col>
        </Row>
    );
}

const TableBigBoy = () => {
    const title = (<HeaderTable />);
    const footer = (<FooterTable />);
    return (
        <Grid className="results">
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
        </Grid>
    );
}

export default TableBigBoy;