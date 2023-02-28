import React from "react"
import { FaAngleRight } from "react-icons/fa"
import { Form, ListGroup, CloseButton } from "react-bootstrap"
import { useGlobalContext } from "../context"
import ToDay from "./ToDay"
import "./SearchWeather.css"

function SearchWeather({ handleClick }) {
  const { isOpenSearch, location, setLocation, toggleIsClose, handleSubmit, sugestionCityData } = useGlobalContext()

  return (
    <>
      {!isOpenSearch ? (
        <Form sm={12} className=" d-flex flex-column mx-auto align-items-center justify-content-between w-75 mt-5" onSubmit={e => handleSubmit()}>
          <Form.Group className=" d-flex mx-auto px-0  w-100 rounded-0 mb-5" controlId="exampleForm.ControlInput1">
            <Form.Control type="search" placeholder="search location" className="rounded-0 fs-5 m-0 bg-blue" style={{ background: "#1E213A", color: "#E7E7EB" }} onChange={e => setLocation(e.target.value)} value={location} />
            <div className="bg-primary p-3 ms-0">
              <CloseButton variant="white" onClick={() => toggleIsClose()} />
            </div>
          </Form.Group>{" "}
          <ListGroup className="w-100 rounded-0 d-flex align-items justify-content-between">
            {sugestionCityData.map((item, uuidv4) => (
              <ListGroup.Item onClick={() => handleClick(item)} key={uuidv4} className="list  fs-5 d-flex justify-content-between">
                {item}
                <FaAngleRight style={{ color: "#616475" }} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Form>
      ) : (
        <ToDay />
      )}
    </>
  )
}

export default SearchWeather
