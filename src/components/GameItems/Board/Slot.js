import React,{useEffect,useState} from 'react'
import Hole from "./Hole";


function Slot(props) {
    const [isHovered,setIsHovered] = useState(false)
    useEffect(()=>{
        // console.log(props.holes);
    })
    const hover = ()=>{

    }
    
    return (
        <>
            <div className={isHovered ? 'slot_hovered' : '' } 
            onClick={props.onclick} 
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            >
                {
                    [...Array(props.holes.length)].map((e, i) => {
                        return (
                            <Hole
                                key={i}
                                value={props.holes[i]}
                            />
                        )

                    })

                }
            </div>
        </>
    )
}

export default Slot
