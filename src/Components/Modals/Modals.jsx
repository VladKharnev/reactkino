import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function Modals(props) {
  return (
    <div>
      <div onClick={props.closeModal} className={style.wrapper_modal}>
        <div
        onClick={(event)=>{event.stopPropagation()}}
          className={style.modal}
        >
          <div className={style.row_one}>
            <h2 className={style.modal_title}>{props.title}</h2>
          </div>
          <div className={style.row_second}>
            <input
              placeholder="search name"
              className={style.input_modal}
              type="text"
              onChange={props.handleInputValue}
              defaultValue={props.valueInput}
            />
            <Link
              className={style.btn_modal}
              to={`/${props.link}/${props.valueInput}`}
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
