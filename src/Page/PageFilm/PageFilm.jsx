import React, {useState, useEffect} from 'react';
import style from './style.module.scss';
import {useParams} from 'react-router-dom';
import GetServices from '../../Api/GetServices';
import Spinner from '../../Components/Spinner/Spinner';

export default function PageFilm() {

  const [dataFilm, setDataFilm] = useState([])
  const {id} = useParams()

  async function getPageDataFilm(){
    const response = await GetServices.getFilm(id)
    setDataFilm(response)
  }

  useEffect(()=>{
    getPageDataFilm()
  },[])

  if(dataFilm == []){
    return <Spinner/>
  }

  console.log(dataFilm)
  return (
    <div className={style.container}>
      <div className={style.img_wrapper}>
        <img className={style.img_film} src={dataFilm.posterUrl} alt="poster" />
      </div>
      <div className={style.film_info}>
        <p>{dataFilm.nameRu}</p>
        <p>{dataFilm.nameOriginal}</p>
        <p>{dataFilm.description}</p>
        <p>{dataFilm.ratingKinopoisk}</p>
      </div>
    </div>
  )
}
