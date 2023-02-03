import React, { useState } from "react";
import Slot from "../Slot";
import "./booking.css";

function Booking({ confirmSlot }) {
  const [teacher, setTeach] = useState();
  const handelClick = (e) => {
    setTeach(e.target.value);
  };
  console.log(teacher);
  return (
    <div>
      <select onClick={handelClick}>
        {confirmSlot.map((item) => {
          return <option>{item.name}</option>;
        })}
      </select>

      <br />
      <br />
      <br />
      <br />

      {confirmSlot.map((item) => {
        if (item.name === teacher) {
          return (
            <select>
              {item.timingSlot.map((ele) => {
                return <option>{ele.day}</option>;
              })}
            </select>
          );
        }
      })}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Booking;
