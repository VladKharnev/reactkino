import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import Modals from '../../Components/Modals/Modals'
import ModalsFilter from '../../Components/ModalsFilter/ModalsFilter'
import hocModal from '../../Components/HocModals/hocModal'

const ModalSearch  = hocModal(Modals)
const ModalSearchActor = hocModal(Modals)
const ModalFilter = hocModal(ModalsFilter)


export default function PageHome(props) {

  const [openModalSearch, setOpenModalSearch] = useState (false)
  const [openModalSearchActor, setOpenModalSearchActor] = useState (false)
  const [openModalFilter, setOpenModalFilter] = useState (false)

  return (
    <div className={style.container}>
      {openModalSearch && <ModalSearch link = 'pagesearchfilms' closeModal = {setOpenModalSearch} title = 'Search movie'/>}
      {openModalSearchActor && <ModalSearchActor link = 'pagesearchactor' closeModal = {setOpenModalSearchActor} title = 'Search actor'/>}
      {openModalFilter && <ModalFilter link ='pagefilmsfilter' setAllValues = {props.setAllValues} closeModal = {setOpenModalFilter} title = 'Movie filter'/>}
      <div className={style.wrapper_column__first}>
        <Link to = "/pagetopfilms" className={style.btn_top_films}>Top Films</Link>
        <div onClick={()=>{setOpenModalSearchActor(true)}} className={style.btn_search_actors}>Search actros</div>
        <div onClick={()=>{setOpenModalFilter(true)}} className={style.btn_films_filter}>Films Filter</div>
        <div onClick={()=>{setOpenModalSearch(true)}} className={style.btn_seatch_films}>Search Films</div>
      </div>
    </div>
  )
}
