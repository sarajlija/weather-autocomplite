import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { useGlobalContext } from "../context"
import { Container } from "react-bootstrap"

function DayLight() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const { toCelsius, units, toFehrenheit, forecastFiveDays } = useGlobalContext()

  //console.log(forecastFiveDays.forecast.forecastday)
  let forecastList = forecastFiveDays.forecast.forecastday
  //let forecastIcon = forecastFiveDays.forecast.forecastday.day.icon

  return (
    <>
      <Container className="mx-auto">
        <Row>
          <Col className=" container  d-flex justify-content-end my-1">
            <Button variant="primary" size="md" className="rounded-5 me-2 mt-2" onClick={toCelsius}>
              &#8451;
            </Button>{" "}
            <Button variant="secondary" size="md" className="rounded-5 mt-2" onClick={toFehrenheit}>
              &#8457;
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="w-75">
        <Row>
          {forecastList.map((item, index) => (
            <Col key={index} className=" g-1">
              <Card style={{ background: " #1E213A", color: "#ffffff", textAlign: "center" }} className="p-2 mb-5 vh-25">
                <Card.Title className="text-light">{weekday[new Date(item.date_epoch * 1000).getDay()]}</Card.Title>
                <Card.Img variant="top" src={item.day.condition.icon} />
                <Card.Body className="">
                  <Card.Text>{item.day.condition.text}</Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    <span>{units ? `${item.day.mintemp_c} \u2103` : `${item.day.mintemp_f}\u2109`}</span>
                    <span>{units ? `${item.day.maxtemp_c} \u2103` : `${item.day.maxtemp_f}\u2109`}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default DayLight
