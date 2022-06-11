import React, { memo, useState, useCallback, useEffect } from 'react'
import api from '../../api'
import Board from './Components/Board'
import Panel from './Components/panel'
import { ContainerStyled } from './Components/style'

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('Brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    api.getCountry(country)
      .then(data => setData(data))
  }, [])
  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }
  
  return (
   <ContainerStyled>
     <div className="mb-2" >
      <Panel data={data} updateAt={updateAt} onChange={handleChange} country={country} getCovidData={getCovidData} />
     </div>
     <Board data={data} />
   </ContainerStyled>
  )
}

export default memo(Main)