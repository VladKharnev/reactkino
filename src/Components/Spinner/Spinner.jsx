import React from 'react'
import style from './style.module.scss'

export default function Spinner() {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
    </div>
  )
}
