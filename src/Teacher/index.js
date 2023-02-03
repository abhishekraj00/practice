import React from "react";
import TimeSlap from "../TimeSlap";

function Teacher({ TeacherData }) {
  return (
    <div>
      {TeacherData.map((item) => {
        return (
          <>
            <div>Name : {item.name}</div>
            <TimeSlap
              start={item.morningStart}
              end={item.morningEnd}
              TeacherData={TeacherData}
            />
            <TimeSlap
              start={item.eveningStar}
              end={item.eveningEnd}
              TeacherData={TeacherData}
            />
          </>
        );
      })}
    </div>
  );
}

export default Teacher;
