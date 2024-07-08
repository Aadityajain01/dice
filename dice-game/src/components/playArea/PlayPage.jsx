import React from "react";
import styles from "./playpage.module.css";
import Button from "../button/Button";
import { useState } from "react";
import ShowRules from "../rules/ShowRules";
export default function PlayPage(props) {
   const [currentDice, setcurrentDice] = useState(1);
   const [score, setScore] = useState(0);
   const [selectedNumber, setSelectedNumber] = useState(null);
   const [ErrorMsg, setErrorMsg] = useState('');
   const [showRules,setShowRules] =useState(false)

   
   const generateRandom = (min, max) => {
      //  console.log(currentDice);
      return Math.floor(Math.random() * (max - min) + min);
   };

   const rollDice = () => {
      const randomNumber = generateRandom(1, 7);
      
      setcurrentDice(randomNumber);
      if (!selectedNumber) {
         setcurrentDice(1)
         setErrorMsg("YOU HAVE NOT SELECTED ANY NUMBER");
         return;
      }
      setErrorMsg("");
      
      if (selectedNumber == randomNumber) {
         setScore(score + randomNumber);
         setSelectedNumber(null);
      } else {
         setScore(score - 1);
         setSelectedNumber(null);
      }
   };
   const resetScore = () => {
      setScore(0);
   };
   
   const numArr = [1, 2, 3, 4, 5, 6];

   return (
      <div className="container">
         <div>
            <nav className={styles.navbar}>
               <div className={`${styles.score} `}>
                  <h1>{score}</h1>
                  <p>TOTAL SCORE</p>
               </div>
               <div className={`${styles.select_dice}`}>
                  <p className={styles.err_msg}>{ErrorMsg}</p>
                  <div className={styles.numbers}>
                     {numArr.map((value, i) => (
                        <button
                           key={i}
                           className={`${styles.select_btn} ${
                              selectedNumber == value
                                 ? styles.black_btn
                                 : styles.select_btn
                           } `}
                           onClick={() => {
                              setSelectedNumber(value);
                           }}
                           value={selectedNumber}
                        >
                           {value}
                        </button>
                     ))}
                  </div>
                  <div className={`${styles.selectNumber}`}>
                     <p>SELECT NUMBER</p>
                  </div>
               </div>
            </nav>
         </div>
         <div className={styles.hero}>
            <div className={styles.dice_img}>
               <img
                  src={`/src/assets/dice_${rollDice?currentDice:"dice_"}.png`}
                  alt=""
                  onClick={rollDice}
               />
               <p>Click On Dice To Roll</p>
            </div>
            <div className={styles.diceBtn}>
               <Button text="Reset Score" resetScore={resetScore} />
               <Button isOutline={true} text={showRules?'Hide Rules':'Show Rules'} showRules={()=>setShowRules(prev => !prev)} />
            </div>
            <div>
               {showRules?<ShowRules></ShowRules>:''}
            </div>
         </div>
      </div>
   );
}
