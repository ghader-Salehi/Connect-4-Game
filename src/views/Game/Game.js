import React from 'react'
import Grid from "../../components/GameItems/Board/Grid";
import ResultBoard from "../../components/GameItems/ResultBoard/ResultBoard";
import { GameContext } from "../../context/Game/GameContext";

function Game() {
    return (
        <>
       
            <div className='d-flex flex-column align-items-center'>
                <GameContext>
                    <Grid />
                    <ResultBoard />
                </GameContext>

            </div>
        </>
    )
}

export default Game
