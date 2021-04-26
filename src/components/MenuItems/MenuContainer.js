import React ,{useContext,useEffect}from 'react'
import MenuButtons from "./MenuButtons";
import { useHistory } from "react-router-dom";
import { MenuWrapper } from "../../context/Menu/MenuContext";
import {NewGame} from './../../api/game';

function MenuContainer() {
    const [playWithAI,setPlayWithAI]  = useContext(MenuWrapper);
    const history = useHistory()

    const handleMultiPlayer = () => history.push('/GamePage');

    const handlePlayWithAI = ()=>{
        NewGame()
            .then(res=>{
                    console.log(res);
            }).catch(err=>{
                    console.log(err);
            })
            
        setPlayWithAI(true)
        history.push('/GamePage')
    }
    const CreateRoom  = () => {

    }
    useEffect(()=>{
        setPlayWithAI(false)
    },[])
    
    return (
        <div className='d-flex flex-column align-items-center pb-5'>

            <MenuButtons  
            text='Multi player' 
            width={'200px'} 
            radius = {'40px'} 
            color='primary'
            event={handleMultiPlayer}
            />

            <MenuButtons   
            text='Play with AI' 
            width={'200px'} 
            radius = {'40px'} 
            color='primary'
            event={handlePlayWithAI}
            />


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
