import React from "react";
import "./slot.css";

function Slot({ day, slot }) {
  const slotArr = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return <div>
  {
    slotArr.map((item)=>{
        return(
            <div>{item>12?`$(12-item)PM`:`${item}AM`}</div>
        )
    })
  }
    </div>;
}

export default Slot;
