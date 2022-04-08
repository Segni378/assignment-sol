import React,{useEffect} from 'react'




const CreateButton = ({id,count}) => {
    
    return (
        <div className = "button">
            <button type = "submit" name = "myForm" value={id} >{count}</button>
        </div>
    )
}

export default CreateButton;