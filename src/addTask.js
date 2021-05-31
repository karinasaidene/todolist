import React from 'react';
import './addTask.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
 
function AddTask(props){
    const items=props.items;
    const listItems=items.map(item=>{
        return <div className="list" key={item.key}>
            <p><input type="text" value={item.text} id={item.key} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>
            <span><FontAwesomeIcon className="faIcon" icon='trash' onClick={()=>props.deleteItems(item.key)}/></span>
            </p> 
            </div> 
    });


    return(
    <div class="cadre">
        <FlipMove duration={500} easing="ease-in-out">{listItems}
        </FlipMove></div>
            

    )

 }
 export default AddTask;