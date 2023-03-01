import "./App.css"
import { useEffect } from "react"
import { Row, Col, Container } from "react-bootstrap"
import ToDay from "./components/ToDay"
import Daily from "./components/Daily"
import { useGlobalContext } from "./context"
import SearchWeather from "./components/SearchWeather"
//
function App() {
  const { isOpenSearch, setIsOpenSearch, sugestionCityData, setSugestionCityData, location, setLocation, loading, setLoading, setForecast } = useGlobalContext()

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
  }

  const fetchData = async () => {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${location}`, options)
    const data = await response.json()
    const citySugestionData = data.map(curData => `${curData.name}, ${curData.country}`)
    setSugestionCityData(citySugestionData)
    const resp = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`, options)
    const dataFotrecast = await resp.json()
    console.log(dataFotrecast)

    setForecast(dataFotrecast)

    setLoading(false)
  }

  useEffect(() => {
    const getDataAfterTimeOut = setTimeout(() => {
      if (location.length > 2) {
        fetchData()
      } else {
        console.log(sugestionCityData)
      }
    }, 2000)
    return () => clearTimeout(getDataAfterTimeOut)
  }, [location])

  const handleClick = clickedCity => {
    setLocation(clickedCity)
    setIsOpenSearch(true)
    setSugestionCityData([])
  }

  if (loading) {
    return (
      <main>
        <Row>
          <Col>
            <h1>Loading..</h1>
          </Col>
        </Row>
      </main>
    )
  }

  return (
    <Container fluid>
      <Row className="App">
        <Col sm={4} style={{ backgroundColor: "#1E213A" }} className="p-0">
          {isOpenSearch ? <ToDay sugestionCityData={sugestionCityData} handleClick={handleClick} /> : <SearchWeather sugestionCityData={sugestionCityData} handleClick={handleClick} />}
        </Col>
        <Col sm={8} style={{ backgroundColor: "#100E1D" }} className="p-0">
          <Daily />
        </Col>
      </Row>
    </Container>
  )
}

export default App
