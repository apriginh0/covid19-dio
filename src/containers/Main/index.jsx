import React, { memo, useState, useCallback, useEffect } from 'react'
import api from '../../api'
import Board from './Components/Board'
import { ContainerStyled } from './Components/style'

function Main() {
  const [data, setData] = useState({})
const [country, setCountry] = useState('Brazil')

  const getCovidData = useCallback((country) => {
    api.getCountry(country)
      .then(data => setData(data))
  }, [])
  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])
  
  return (
   <ContainerStyled>
     <div className="mb-2" >

     </div>
     <Board data={data} />
   </ContainerStyled>
  )
}

export default memo(Main)