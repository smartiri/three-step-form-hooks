const StepFour = ({ formData }) => {
  return (
    <div className="space">
      <h1>Details</h1>
      <div className="gapping">
        <div>
          {Object.entries(formData).map(([key, val]) => (
            <p style={{ fontWeight: "bold" }}>
              {key.toUpperCase()}:{" "}
              <span style={{ fontWeight: "500" }}>{val}</span>
            </p>
          ))}
        </div>
        <button onClick={() => localStorage.clear()}>Reset</button>
      </div>
    </div>
    // </div>
  );
};

export default StepFour;
