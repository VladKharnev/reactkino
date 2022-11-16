import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GetServices from '../../Api/GetServices'
import Spinner from '../../Components/Spinner/Spinner'

import style from './style.module.scss'

export default function PageSearchActor() {

  const [data, setData] = useState(false)
  const {actor} = useParams()

  async function getSeachActor (){
    const response = await GetServices.getSearchActor(actor)
    setData(response)
  }

  useEffect(()=>{
    getSeachActor()
  },[])
  
  if(!data){
    return <Spinner/>;
  }else if(data.length == 0){
    return <div className={style.container}>
      <h2 className = {style.notfound}>Ничего не найдено</h2>
    </div>
  }


  return (
    <div className={style.container}>
      {data.map((item, id)=>(
        <div key={id} className={style.actor_wrapper}>
          <div className={style.image_actor}>
            <img src={item.posterUrl} alt="poster" />
          </div>
          <div className={style.info_actor}>
            <h3>{item.nameRu}</h3>
            <p>Пол: {`${item.sex === 'MALE' ? `Мужской` :  `Женский`}`}</p>
            <a className={style.info_actor__btn} href={item.webUrl}>Подробнее на кинопоиске</a>
          </div>
        </div>
      ))}
    </div>
  )
}
