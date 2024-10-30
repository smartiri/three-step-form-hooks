import { useRef } from "react";
import "../the_step_pages/assets/Header.css";
function StepOne({ user, nextStep }) {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);

  return (
    <div className="space">
      <h1>Step One</h1>
      <div className="gapping">
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter name"
          defaultValue={user.name}
        />
        <input
          ref={surnameRef}
          type="text"
          placeholder="Enter surname"
          defaultValue={user.surname}
        />
        <button
          onClick={() =>
            nextStep(nameRef.current.value, surnameRef.current.value)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;
/*  */
