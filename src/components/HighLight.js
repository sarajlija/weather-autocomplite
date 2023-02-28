import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ProgressBar from "react-bootstrap/ProgressBar"
import { Container } from "react-bootstrap"
import { useGlobalContext } from "../context"
import { WiDirectionUp, WiDirectionUpRight, WiDirectionLeft, WiDirectionUpLeft, WiDirectionDown, WiDirectionDownLeft } from "react-icons/wi"

function HighLight() {
  const { forecastFiveDays } = useGlobalContext()
  const wind = forecastFiveDays.current.wind_kph
  const windDir = forecastFiveDays.current.wind_dir
  const now = forecastFiveDays.current.humidity
  const visibility = forecastFiveDays.current.vis_km
  const pressure = forecastFiveDays.current.pressure_mb
  let weatherIcon
  switch (windDir) {
    case "NW":
      weatherIcon = <WiDirectionUpLeft />
      break
    case "N":
      weatherIcon = <WiDirectionDown />
      break
    case "NNE":
      weatherIcon = <WiDirectionDownLeft />
      break
    case "E":
      weatherIcon = <WiDirectionLeft />
      break
    case "SE":
      weatherIcon = <WiDirectionUpLeft />
      break
    case "S":
      weatherIcon = <WiDirectionUp />
      break
    case "SW":
      weatherIcon = <WiDirectionUpRight />
      break
    case "W":
      weatherIcon = <WiDirectionLeft />
      break
    default:
      console.log("WeathwerIcon not present")
      break
  }
  console.log(windDir)
  return (
    <div className="container w-75 text-light">
      <h2 className="mb-3">Today's highlight</h2>
      <Container>
        <Row className="g-1">
          <Col style={{}} className="">
            <Card style={{ height: "150px", background: " #1E213A", color: "#ffffff", textAlign: "center" }} className="p-1">
              <Card.Body>
                <Card.Title className="fs-1">
                  <Card.Text style={{ fontSize: "0.8rem" }}>Wind status</Card.Text>
                  {wind}
                  <span style={{ fontSize: "1rem" }}>mph</span>
                  <Card.Text className="mt-2 d-flex align-items-center justify-content-center">
                    <span style={{ fontSize: "3rem", color: "red", marginBottom: "16px" }}> {weatherIcon}</span>
                    <span style={{ fontSize: "0.8rem" }}>{windDir}</span>
                  </Card.Text>{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} style={{}}>
            <Card style={{ height: "150px", background: " #1E213A", color: "#ffffff", textAlign: "center", padding: "10px" }} className="">
              <Card.Body>
                <Card.Title className="fs-1">
                  <Card.Text style={{ fontSize: "0.6rem" }}>Humdity</Card.Text>
                  {`${now}%`}
                  <ProgressBar variant="warning" now={now} label={`${now}%`} style={{ height: "12px" }} />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} style={{}}>
            <Card style={{ height: "150px", background: " #1E213A", color: "#ffffff", textAlign: "center" }} className="p-3">
              <Card.Body>
                <Card.Title style={{ fontSize: "0.8rem" }}>Visibility</Card.Title>
                <Card.Text style={{ fontSize: "30px" }} className="">
                  {visibility}
                  <span style={{ fontSize: "1rem" }}>miles</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} style={{}}>
            <Card style={{ height: "150px", background: " #1E213A", color: "#ffffff", textAlign: "center" }} className="p-3">
              <Card.Body>
                <Card.Title style={{ fontSize: "0.8rem" }}>Air Pressure</Card.Title>
                <Card.Text className="fs-1">
                  {pressure}
                  <span style={{ fontSize: "1rem" }}>mb</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HighLight
