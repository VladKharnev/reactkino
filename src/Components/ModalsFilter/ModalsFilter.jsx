import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";


export default function (props) {


  return (
    <div>
      <div onClick={props.closeModal} className={style.wrapper_modal}>
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={style.modal}
        >
          <div className={style.row_one}>
            <h2>{props.title}</h2>
          </div>
          <div className={style.row_second}>
            <form id="formElem" onSubmit={props.formik.handleSubmit}>
              <input
                placeholder="please enter min raiting"
                className={style.input_modal}
                type="text"
                id = "minRaiting"
                name="minRaiting"
                onChange={props.formik.handleChange}
                value={props.formik.values.minRaiting}
              />
              <input
                placeholder="please enter max raiting"
                className={style.input_modal}
                type="text"
                id = "maxRaiting"
                name="maxRaiting"
                onChange={props.formik.handleChange}
                value={props.formik.values.maxRaiting}
              />
              <input
                placeholder="please enter min year"
                className={style.input_modal}
                type="text"
                name="minYear"
                id = "minYear"
                onChange={props.formik.handleChange}
                value={props.formik.values.minYear}
              />
              <input
                placeholder="please enter max year"
                className={style.input_modal}
                type="text"
                name="maxYear"
                id = "maxYear"
                onChange={props.formik.handleChange}
                value={props.formik.values.maxYear}
              />
              <input
                placeholder="please enter movie"
                className={style.input_modal}
                type="text"
                name="string"
                id = "string"
                onChange={props.formik.handleChange}
                value={props.formik.values.string}
              />
            </form>
            <Link className={style.btn_modal}
              onClick={props.closeModal}
              to={`/${props.link}/`}
            >
              <button className={style.btn_modal} type='submit' form="formElem">Search</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}