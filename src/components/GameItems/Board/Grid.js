import React, { useState, useEffect, useContext } from 'react'
import Slot from "../../GameItems/Board/Slot";
import { GameWrapper } from "../../../context/Game/GameContext";
import "./Board.scss";


function Grid() {

    const [array, setArray] = useState(new Array(7).fill(new Array(6).fill(null)));
    const [turn, setTurn] = useState('red');
    const [playerTurn, setPlayerTurn] = useContext(GameWrapper)

    const Move = (columnId) => {
        const boardCopy = array.map(function (arr) {
            return arr.slice();
        });
        if (boardCopy[columnId].indexOf(null) !== -1) {

            let newSlot = boardCopy[columnId].reverse()
            newSlot[newSlot.indexOf(null)] = turn;
            setTurn(turn === 'red' ? 'blue' : 'red');

            setPlayerTurn(turn === 'red' ? 'blue' : 'red');
            newSlot.reverse()



            setArray(boardCopy)

        }

    }


    function checkLine(a, b, c, d) {
        return ((a !== null) && (a === b) && (a === c) && (a === d));
    }

    function checkWinner(bs) {
        for (let c = 0; c < 7; c++)
            for (let r = 0; r < 4; r++)
                if (checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
                    return bs[c][r] + ' wins!'

        for (let r = 0; r < 6; r++)
            for (let c = 0; c < 4; c++)
                if (checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
                    return bs[c][r] + ' wins!'

        for (let r = 0; r < 3; r++)
            for (let c = 0; c < 4; c++)
                if (checkLine(bs[c][r], bs[c + 1][r + 1], bs[c + 2][r + 2], bs[c + 3][r + 3]))
                    return bs[c][r] + ' wins!'

        for (let r = 0; r < 4; r++)
            for (let c = 3; c < 6; c++)
                if (checkLine(bs[c][r], bs[c - 1][r + 1], bs[c - 2][r + 2], bs[c - 3][r + 3]))
                    return bs[c][r] + ' wins!'

        return "";
    }

    const ResetGame = ()=>{
        setArray(new Array(7).fill(new Array(6).fill(null)));
        setTurn('red')
        setPlayerTurn('red')
    }



    useEffect(() => {
       if(checkWinner(array)){
           alert(checkWinner(array));
           ResetGame();
       }
    })

    return (
        <>
            <div className="grid shadow bg-light">

                {
                    [...Array(array.length)].map((item, index) => {
                        return (
                            <Slot
                                key={index}
                                holes={array[index]}
                                onclick={() => Move(index)}
                            />
                        )

                    })


                }
            </div>

        </>
    )
}

export default Grid
