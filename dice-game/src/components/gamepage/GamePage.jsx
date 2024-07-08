import React from "react";
import styles from "../gamepage/gamepage.module.css";
import DiceImage from "/src/assets/dices.png";
import { Link } from "react-router-dom";
import Button from "../button/Button";


export default function GamePage() {
   return (
      <div className={`${styles.container}`}>
         <div className={`${styles.hero_image}`}>
            <img src={DiceImage} alt="" />
         </div>

         <div className={`${styles.play_button}`}>
            <h1>DICE GAME</h1>

            <Link to="/playpage" className={styles.playbutton}>
               <Button isOutline = {true} text="PLAY NOW" />
               {" "}
            </Link>
         </div>
      </div>
   );
}
