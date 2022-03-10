import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class FFlow extends Component {
    render() {
      const btn = {minWidth: '100%', margin: '.3em'};
        return (
            <Container>
              <Row>
                <Col><Button style={btn}>項目</Button></Col>
                <Col><Button style={btn}>慈善</Button></Col>
              </Row>
            </Container>
        )
    }
}
