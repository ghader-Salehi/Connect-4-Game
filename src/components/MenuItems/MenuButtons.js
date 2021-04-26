import React from 'react'
import Button from '@material-ui/core/Button';
import { btn_font} from "./MenuItems.module.scss";

function MenuButtons(props) {
    return (
       
        <Button className={`m-4 mb-2 p-3 ` }
        style={{
            width : props.width , 
            borderRadius: props.radius,
            backgroundColor:  "rgb(69, 96, 185)"
        }}  
        variant="contained" 
        color={props.color}
        onClick={() => props.event()}

        >
            <span className={`${btn_font}`}>
            {props.text}
            </span>
           
        </Button>
      
    )
}

export default MenuButtons
