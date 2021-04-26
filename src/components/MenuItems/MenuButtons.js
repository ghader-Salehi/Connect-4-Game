import React from 'react'
import Button from '@material-ui/core/Button';

function MenuButtons(props) {
    return (
       
        <Button className='m-4 mb-2 p-3' 
        style={{
            width : props.width , 
            borderRadius: props.radius
        }}  
        variant="contained" 
        color={props.color}
        onClick={() => props.event()}

        >
           {props.text}
        </Button>
      
    )
}

export default MenuButtons
