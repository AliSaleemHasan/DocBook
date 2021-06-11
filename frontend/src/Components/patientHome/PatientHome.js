import React from "react";
import Header from "../header/Header";
import "./PatientHome.css";
import { Selector as userSelector } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";
function PatientHome() {
  const user = useSelector(userSelector);
  return (
    <div className="patientHome">
      <Header />
      <div className="patientHome__main">
        <div className="patientHome__left">
          <div className="patientHome__leftParagraph">
            {user && (
              <p className="weclome__paragraph">
                welcome to DocBook
                <span className="blue__important"> {user.fullName}</span>
              </p>
            )}
            <h2>
              Website that make doctors booking
              <span className="underlined">easier</span>
            </h2>
            <p className="main__paragrapgh">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              tempora accusamus quod! Mollitia nulla facere minus quo natus
              consequuntur incidunt quisquam maxime eius reiciendis? Facilis
              iste atque cupiditate sapiente saepe.
            </p>
          </div>
          <button>search for doctors</button>
        </div>
        <div className="patientHome__right">
          <img
            src="DocBookillustrator.png"
            alt="DocBookIllustrator "
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default PatientHome;
