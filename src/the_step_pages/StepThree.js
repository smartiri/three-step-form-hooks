import { useRef } from "react";
import "../the_step_pages/assets/Header.css";
function StepThree({ company, nextStep, prevStep }) {
  const cnameRef = useRef(null);
  const ccodeRef = useRef(null);
  return (
    <div className="space">
      <h1>Step Three</h1>
      <div className="gapping">
        <input
          ref={cnameRef}
          type="text"
          placeholder="Enter company name"
          defaultValue={company.companyName}
        />
        <input
          ref={ccodeRef}
          type="text"
          placeholder="Enter company code"
          defaultValue={company.companyCode}
        />
        {/* <div> */}
        <button style={{ float: "left" }} onClick={prevStep}>
          Back
        </button>
        <button
          onClick={() =>
            nextStep(cnameRef.current.value, ccodeRef.current.value)
          }
          style={{ color: "green", border: "1px solid green", width: "100%" }}
        >
          Done
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default StepThree;
/*  */
