import React, { useState } from "react";
import Teacher from "../Teacher";
import TimeSlot from "../TimeSlap";
import "./home.css";

function Home() {
  const [TeacherData, setTeacherData] = useState([]);
  const tempObj = {
    name: "",
    day: "",
    morningStart: "",
    morningEnd: "",
    eveningStar: "",
    eveningEnd: "",
  };
  const [toggle, setToggel] = useState(true);
  const [data, setData] = useState(tempObj);

  const handleData = (e) => {
    let temp = data;
    temp[e.target.name] = e.target.value;
    setData({ ...temp });
  };
  const handleDone = () => {
    setTeacherData([...TeacherData, data]);
    setData(tempObj);
    setToggel(!toggle);
  };

//   console.log(data);
//   console.log(TeacherData);

  return (
    <>
      <div className="main_Home">
        <h1>Teacher Portal</h1>
        <h4>Name</h4>
        <input
          className="userInput"
          name="name"
          placeholder="username"
          onChange={handleData}
          value={data.name}
        />
        <h1>Please fill duration</h1>
        <div className="morning_shift">
          <h3>Select Day</h3>
          <select name="day" className="day" onClick={handleData}>
            <option>Moday</option>
            <option>Tuseday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>saturday</option>
            <option>sunday</option>
          </select>
          <h3>morning shift from 10AM to 12PM</h3>
          <div className="time">
            <input
              name="morningStart"
              type={"number"}
              className="start"
              placeholder="strat"
              onChange={handleData}
              value={data.morningStart}
            />
            <h5>from</h5>
            <input
              name="morningEnd"
              type={"number"}
              className="end"
              placeholder="end"
              onChange={handleData}
              value={data.morningEnd}
            />
          </div>
          <h3>eveing shift from 12PM to 6PM</h3>
          <div className="time">
            <input
              type={"number"}
              name="eveningStar"
              className="start"
              placeholder="strat"
              onChange={handleData}
              value={data.eveningStar}
            />
            <h5>from</h5>
            <input
              type={"number"}
              name="eveningEnd"
              className="end"
              placeholder="end"
              onChange={handleData}
              value={data.eveningEnd}
            />
          </div>
        </div>
        <div></div>
        <button onClick={handleDone}>Done</button>
      </div>

      <Teacher TeacherData={TeacherData}  />
      <TimeSlot TeacherData={TeacherData}/>
    </>
  );
}

export default Home;
