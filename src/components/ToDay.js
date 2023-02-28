import React from "react"
import { Row, Card, Button, Col } from "react-bootstrap"
import { BiCurrentLocation } from "react-icons/bi"
import { MdLocationOn } from "react-icons/md"
import CloudBg from "../asets/Cloud-background.png"
import { useGlobalContext } from "../context"
import moment from "moment"
//import SearchWeather from "./SearchWeather"
//import SearchWeather from "./components/SearchWeather"
//import ShowPosition from "./components/ShowPosition"
function ToDay() {
  const { openSearch, units, forecastFiveDays, location } = useGlobalContext()
  let temperatureC = forecastFiveDays.current.temp_c
  let temperatureF = forecastFiveDays.current.temp_f
  let condition = forecastFiveDays.current.condition.text
  let icon = forecastFiveDays.current.condition.icon
  console.log(temperatureC)

  return (
    <>
      <Row className="d-flex flex-column justify-content-between align-items-center mx-4 mt-5">
        <Col className="d-flex justify-content-between align-items-center mx-auto">
          <Button variant="secondary" onClick={openSearch} className="rounded-0 aliign-self-center">
            search for place
          </Button>

          <Button variant="secondary" className=" d-flex justify-content-center align-items-center" style={{ borderRadius: "50%", padding: "8px " }}>
            <BiCurrentLocation />
          </Button>
        </Col>

        <Col>
          <Card style={{ backgroundColor: "#1E213A" }} className=" rounded-0 p-0 text-white vh-100 border-0 text-center">
            <Card.Img style={{ margin: "0.5rem auto", width: "130px" }} src={icon} alt="Card image" className="" />
            <Card.Img style={{ opacity: "0.1" }} src={CloudBg} alt="Card image" className="position-absolute" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-center flex-column position-relative">
              <Card.Title style={{ fontSize: "6rem", marginBottom: "86px" }} className="text-center opacity-100 fw-500">
                {units ? `${temperatureC}\u2103` : `${temperatureF}\u2109`}
              </Card.Title>
              <Card.Text className="fs-1 opacity-50 text-capitalize">{condition}</Card.Text>
              <Card.Text className="fs-4 opacity-50 ">Today . {moment().format("MMM Do YY")}</Card.Text>

              <Card.Text className="fs-5 opacity-75 ">
                <MdLocationOn className="me-2" />
                {location}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ToDay
