import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class OFlow extends Component {
    render() {
      const btn = {minWidth: '100%', margin: '.3rem .1rem .1rem 0'};
        return (
            <Container>
              <Row>
                <Col><Button style={btn}>副業</Button></Col>
                <Col><Button style={btn}>金融</Button></Col>
                <Col><Button style={btn}>地產</Button></Col>
                <Col><Button style={btn}>企業</Button></Col>
              </Row>
              <Row>
                <Col><Button style={btn}>覺察</Button></Col>
                <Col><Button style={btn}>行情</Button></Col>
                <Col><Button style={btn}>相親男</Button></Col>
                <Col><Button style={btn}>相親女</Button></Col>
              </Row>
            </Container>
        )
    }
}
