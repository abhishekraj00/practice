import React, { useState } from "react";
import Booking from "../Booking";
import { slotTime } from "./slotAssests";
import "./time.css";

function TimeSlot() {
  const [obj, setObj] = useState({
    name: "",
    timingSlot: [],
  });

  const [techerData, setTeacherData] = useState([]);
  const [slotData, setSlotData] = useState(slotTime);
  const [confirmSlot, setConfirmSlo] = useState([]);

  const handleCheckStatus = (e) => {
    let temp = slotData;
    temp[e.target.name].select = e.target.checked;
    setSlotData([...temp]);
  };

  let startTime = "";
  const handelTime = (e) => {
    if (e.target.name === "start") {
      startTime = e.target.value;
    }
    if (e.target.name === "end") {
      let temparr = slotData;
      temparr[e.target.id].slot = +e.target.value - +startTime;
    //   temp["startT"] = startTime;
      setSlotData([...temparr]);
      console.log(startTime);
      console.log(e.target.value);
    }
  };

  const handelSave = () => {
    let tempObj = {
      name: userName,
      timingSlot: confirmSlot,
    };
    setTeacherData([...techerData,tempObj])
    setUserName1("");
  };

  console.log(techerData);

  const handelAdd = (e) => {
    let arrData = confirmSlot;
    let flag = true;
    for (let i = 0; i < arrData.length; i++) {
      if (arrData[i].day === slotData[e.target.id].day) {
        flag = false;
      }
    }
    if (flag) {
      setConfirmSlo([...confirmSlot, slotData[e.target.id]]);
    }
  };

  const [userName, setUserName1] = useState("");

  console.log(obj);

  return (
    <div className="slot_box">
      <h3>userName</h3>
      <input value={userName} onChange={(e) => setUserName1(e.target.value)} />
      {slotData.map((item, index) => {
        return (
          <div key={index} className="box">
            <div className="slot_main">
              <label>
                <input
                  type={"checkbox"}
                  name={index}
                  checked={item.select}
                  onChange={handleCheckStatus}
                />
                {item.day}
              </label>

              <div>
                <div>Start Time</div>
                <select
                  name="start"
                  id={index}
                  className="select_main"
                  onChange={handelTime}
                >
                  {item.startVal.map((ele) => {
                    return (
                      <>
                        <option value={ele}>
                          {ele > 12 ? `${ele - 12}PM` : ele + "AM"}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <div>End Time</div>
                <select
                  className="select_main"
                  name="end"
                  id={index}
                  onChange={handelTime}
                >
                  {item.endVal.map((ele) => {
                    return (
                      <>
                        <option value={ele}>
                          {ele > 12 ? `${ele - 12}PM` : ele + "AM"}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="add" id={index} onClick={handelAdd}>
              ➕
            </div>
          </div>
        );
      })}
      <button onClick={handelSave}>Save</button>

      {/* booking */}
      <br />
      <br />
      <h4>Student Portal</h4>

      <Booking confirmSlot={techerData} />
    </div>
  );
}

export default TimeSlot;
