import React from "react";
import styles from './button.module.css'
export default function Button(props) {
   return (
      <div>
         <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}
         onClick={props.resetScore?props.resetScore:props.showRules}
         
         > {props.text} </button>
      </div>
   );
}
