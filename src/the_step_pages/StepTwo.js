import { useRef } from "react";
import "../the_step_pages/assets/Header.css";
function StepTwo({ details, nextStep, prevStep }) {
  const ageRef = useRef(null);
  const genderRef = useRef(null);

  return (
    <div className="space">
      <h1>Step Two</h1>
      <div className="gapping">
        <input
          ref={ageRef}
          type="text"
          placeholder="Enter age"
          defaultValue={details.age}
        />
        <input
          ref={genderRef}
          type="text"
          placeholder="Enter gender"
          defaultValue={details.gender}
        />
        <div>
          <button style={{ float: "left" }} onClick={prevStep}>
            Back
          </button>
          <button
            onClick={() =>
              nextStep(ageRef.current.value, genderRef.current.value)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
