import React from 'react';
import './ListItem.css';

export default function ListItems(props) {
    let items = props.items.map(item=>{
        return (
            <div className="listItem" key={item.key}>
                
                <p>{item.text}</p>
                {/* <span className="icon" > */}
                <i class="far fa-edit" onClick={()=>props.editItem(item.key)}></i>
                <i class="fas fa-trash" onClick={()=>props.deleteItem(item.key)}></i>
                {/* </span> */}
            </div>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}
