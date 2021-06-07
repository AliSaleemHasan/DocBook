import React from "react";
import "./Appointment.css";

function Appointment({ date, patients }) {
  return (
    <div className="appointment">
      <h4 className="appointment__date">{date}</h4>
      <div className="appointment__patients">
        {patients.map((patient, index) => (
          <p key={index}> {patient}</p>
        ))}
      </div>
    </div>
  );
}

export default Appointment;
