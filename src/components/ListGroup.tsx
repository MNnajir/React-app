//import { Fragment } from "react";
import { useState } from "react";
// {items : [], heading: string}

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items:string) => void
}



function ListGroup({items, heading, onSelectItem}:Props) {
  //let selectedIndex = 0;
  // Hook
 const [selectedIndex, setSelectedIndex] = useState(-1);
 //arr[0] // variable (slectedIndex)
 //arr[1] // updater function
 //items = [];

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No items found </p>}
    
      <ul className="list-group" >
        {items.map((items, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
          key={items} 
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(items);
          }}
          >
            {items}</li>
        ))}
      </ul> 
    </>
  );
}

export default ListGroup;
