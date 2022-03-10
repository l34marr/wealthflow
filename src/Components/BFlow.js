import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class BFlow extends Component {
    render() {
      const btn = {minWidth: '100%', margin: '.3em'};
        return (
            <Container>
              <Row>
                <Col><Button style={btn}>逆流</Button></Col>
                <Col><Button style={btn}>覺察</Button></Col>
              </Row>
            </Container>
        )
    }
}
