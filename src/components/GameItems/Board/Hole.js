import React,{useEffect} from 'react'






function Hole(props) {
    useEffect(()=>{
        // console.log('hole updated');
    })
    return (
        <>
            <div className = {` hole `}  >
                <div className={props.value}>
                
                </div>
            </div>
        </>
    )
}

export default Hole
