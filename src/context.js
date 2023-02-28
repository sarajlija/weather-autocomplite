import React, { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isOpenSearch, setIsOpenSearch] = useState(true)
  const [sugestionCityData, setSugestionCityData] = useState([])
  const [location, setLocation] = useState("Sarajevo")
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState()
  const [forecastFiveDays, setForecast] = useState([])
  const [units, setUnits] = useState(true)

  const toggleIsClose = () => {
    setIsOpenSearch(true)
    setSugestionCityData([])
    setLocation(location)
  }

  const toCelsius = () => {
    setUnits(true)
  }
  const toFehrenheit = () => {
    setUnits(false)
  }

  const openSearch = () => {
    setIsOpenSearch(false)
  }

  const closeSearch = () => {
    setIsOpenSearch(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (location !== "undefined") {
      setLocation()
    } else {
      console.log("UNDEFINED")
      setLocation("Livno")
    }
  }
  return (
    <AppContext.Provider
      value={{
        isOpenSearch,
        setIsOpenSearch,
        openSearch,
        closeSearch,
        setLocation,
        location,
        sugestionCityData,
        setSugestionCityData,
        units,
        setUnits,
        toCelsius,
        toFehrenheit,
        handleSubmit,
        toggleIsClose,
        clicked,
        setClicked,
        loading,
        setLoading,
        current,
        setCurrent,
        forecastFiveDays,
        setForecast
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
