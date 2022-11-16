import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

export default function Card({data}) {
  return (
    <Link className={style.link_card} to = {`/pagetopfilms/film/${data.filmId}`}>
    <div className={style.container_card}>
        <div style={{'backgroundImage': `url(${data.posterUrl})`}} className={style.poster_card}></div>
        <div className={style.wrapper_info}>
            <h2>{data.nameRu}</h2>
            <h3>{data.rating}</h3>
            <span>{data.year}</span>
        </div>
    </div>
    </Link>
  )
}
