import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems (props) {
    const items = props.items;
    const listItems = items.map(items => {
        return <div className="list" key={items.key}>
            <p >
                <input type = 'text' 
                id={items.key}
                 value={items.text} 
                 onChange = {
                    (e) => {
                        props.setUpdate(e.target.value, items.key)
                    } 
                 } />
            <span>
                <FontAwesomeIcon className="faicon"
                 icon='trash' 
               onClick = {() => props.deleteItem(items.key)}  />
            </span>
            
            </p>
           
        </div> 
    })
    return (
        <div>{listItems}</div>
      
    )
}

export default ListItems;