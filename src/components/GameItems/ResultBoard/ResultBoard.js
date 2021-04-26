import React,{useState,useContext} from 'react'
import { GameWrapper } from "../../../context/Game/GameContext";
import {  red,blue,grow} from "./ResultBoard.module.scss";

function ResultBoard() {
    const [playerTurn , setPlayerTurn] = useContext(GameWrapper)

    return (
        <>
            <div className='m-5 d-flex justify-content-around'>
              
                   <div className={`${red} m-3 ${playerTurn==='red' ? grow : ''}`}>


                   </div>
                   <div className={`${blue} m-3 ${playerTurn==='blue' ? grow : ''}`}>


                   </div>

               
              
            </div>

        </>
    )
}

export default ResultBoard
