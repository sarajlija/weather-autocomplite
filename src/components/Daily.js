import React from "react"
import DayLight from "./DayLight"
import HighLight from "./HighLight"
import { Container, Row, Col } from "react-bootstrap"

function Daily() {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <DayLight />
        </Col>
        <Col sm={12}>
          <HighLight />
        </Col>
      </Row>
    </Container>
  )
}

export default Daily
