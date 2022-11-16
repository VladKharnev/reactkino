import React, {useEffect, useState, useContext} from 'react'
import dataContext from '../../Context/data'
import Spinner from '../../Components/Spinner/Spinner'
import Card from '../../Components/Cards/Card'
import style from './style.module.scss'



export default  function PageTopFilms() {
  const data = useContext(dataContext)


  if (!data){
    return <Spinner/>
  }

  return (
    <div className={style.container}>
      {data.map((item, index)=>(
       <Card key={index}  data={item}/>
      ))}
    </div>
  )
}
