import React, { useState } from 'react'
import Draggable from 'react-draggable';
const Text = () => {
    const [edit,setEdit] =useState(false);
    const [value,setValue] = useState("Double click to Edit");
  return (
    <div>
        <Draggable>
        {
            edit ? ( <input  onDoubleClick={(e)=>setEdit(false)} value={value} onChange={item => setValue(item.target.value)}/> ) : (<h1 onDoubleClick={e=>setEdit(true)}>{value}</h1>)
        }
        </Draggable>
      
    </div>
  )
}

export default Text;
