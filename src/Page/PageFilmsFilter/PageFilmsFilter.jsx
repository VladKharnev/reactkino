import React from 'react'
import GetServices from '../../Api/GetServices'
import { useState, useEffect } from 'react'
import Spinner from '../../Components/Spinner/Spinner'
import Card from '../../Components/Cards/Card'

import style from './style.module.scss'

export default function PageFilmsFilter(props) {

  const [data, setData] = useState(false)
  const {minYear, maxYear, maxRaiting,minRaiting, string} = props.allValues

  async function getFilterMovie (){
    const response = await GetServices.getFilterFilm(minYear, maxYear, maxRaiting, minRaiting, string)
    setData(response)
  }

  useEffect(()=>{
    getFilterMovie()
  },[])

  if(!data){
    return <Spinner/>;
  }else if(data.length == 0){
    return <div className={style.container}>
      <h2>Ничего не найдено</h2>
    </div>
  }

  return (
    <div className={style.container}>
    {data.map((item, index)=>(
     <Card key={index}  data={item}/>
    ))}
  </div>
  )
}
