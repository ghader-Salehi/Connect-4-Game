import React,{useState,createContext} from 'react'


const GameWrapper = createContext()
const GameContext = (props)=> {
    const [playerTurn , setPlayerTurn] = useState('red')
    return (
        <GameWrapper.Provider value={[playerTurn , setPlayerTurn] }>
            {props.children}
        </GameWrapper.Provider>
    )
}

export { GameContext , GameWrapper}
