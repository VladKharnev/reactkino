import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import GetServices from '../../Api/GetServices'

import Card from '../../Components/Cards/Card'
import Spinner from '../../Components/Spinner/Spinner'

import style from './style.module.scss'

export default function PageSearchFilms() {

  const [data, setData] = useState(false)
  const {film} = useParams()

  async function getFilm(){
    const response = await GetServices.getSearchFilm(film)
    setData(response)
  }

  useEffect(()=>{
    getFilm()
  },[])

  if(!data){
    return <Spinner/>;
  }else if(data.length == 0){
    return <div className={style.container}>
      <h2>Ничего не найдено</h2>
    </div>
  }

  

  return (
    <div className={style.container}>{data.map((item, id)=>(
      <Card data = {item} key = {id}/>
    ))}</div>
  )
}
