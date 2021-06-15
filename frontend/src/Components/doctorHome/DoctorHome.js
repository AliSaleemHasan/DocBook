import React from "react";
import "./DoctorHome.css";
import Header from "../header/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { appointmentData } from "./doctorDummyData";
import Appointment from "../appointment/Appointment";
function DoctorHome() {
  return (
    <div className="doctorHome">
      <Header />
      <div className="doctorHome__container">
        <div className="doctorHome__left">
          <Calendar />

          <img src="bar_chart.png" alt="chart" />
        </div>
        <div className="doctorHome__right">
          <div className="doctorHome__appointment">
            <h1>
              Today's <span className="underlined">Appointments</span>
            </h1>
            <div className="appointments">
              {appointmentData.map((appointment, index) => (
                <Appointment
                  date={appointment.time}
                  key={index}
                  patients={appointment.patients}
                />
              ))}
            </div>
          </div>
          <div className="add__appointment">
            <h1>Add Appointment</h1>
            <form action="">
              <label for="from">From</label>
              <input type="time" id="from" />
              <label for="to">To</label>
              <input type="time" id="to" />
              <button>Add </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorHome;
