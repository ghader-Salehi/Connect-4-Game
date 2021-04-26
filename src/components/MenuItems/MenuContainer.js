import React from 'react'
import MenuButtons from "./MenuButtons";
import { useHistory } from "react-router-dom";
function MenuContainer() {

    const history = useHistory()

    const GoToGame = () => history.push('/GamePage');
    const playWithAI = ()=> {
        // save that game is with AI
    }
    const CreateRoom  = () => {

    }

    
    return (
        <div className='d-flex flex-column align-items-center pb-5'>

            <MenuButtons  
            text='Multi player' 
            width={'200px'} 
            radius = {'40px'} 
            color='primary'
            event={GoToGame}
            />

            <MenuButtons   
            text='Play with AI' 
            width={'200px'} 
            radius = {'40px'} 
            color='primary'/>


            <MenuButtons  
            text='Make a Room' 
            width={'200px'} 
            radius = {'40px'} 
            color='primary'/>

            <MenuButtons  
            text='Seeting' 
            width={'200px'} 
            radius = {'40px'} 
            color='primary'/>

        </div>
    )
}

export default MenuContainer
