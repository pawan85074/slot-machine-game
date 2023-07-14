import React from 'react'

const SlotM= (props)=>{
    let x=props.x;
    let y=props.y;
    let z=props.z;
    if((x===y)&& (y===z))
    {
        return(
            <>
            <div style={{width: '18rem'}}>
                    <h1 className='text-center mt-2'>{x} {y} {z}</h1>
                    <h1 className='text-center'>Matching</h1>
                    
                </div>
            </>
        );
    }
    else
    {
        return(
            <> 
           <div style={{width: '18rem'}}>
                    <h1 className='text-center mt-2'>{x} {y} {z}</h1>
                    <h1 className='text-center'>Not Matching</h1>
                    
                </div>
            </>
        );
    }
};

export default SlotM