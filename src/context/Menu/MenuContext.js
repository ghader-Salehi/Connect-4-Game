import React,{useState,createContext} from 'react'

const MenuWrapper = createContext()
const MenuContext = (props) => {
    const [playWithAI,setPlayWithAI]  = useState(false);
    return (
        <MenuWrapper.Provider value={[playWithAI,setPlayWithAI]}>
            {props.children}
        </MenuWrapper.Provider>
    )
}

export {MenuContext,MenuWrapper} 
