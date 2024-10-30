import "../the_step_pages/assets/Header.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import useStepForm from "../the_hooks/useStepForm";
import StepFour from "./StepFour";

function FormContainer() {
  const {
    formData: { step, ...formData },
    setStep1,
    setStep2,
    setStep3,
    goPrevStep,
  } = useStepForm();

  return (
    <div className="form">
      {step === 1 && (
        <StepOne
          user={{
            name: formData.name,
            surname: formData.surname,
          }}
          nextStep={setStep1}
        />
      )}
      {step === 2 && (
        <StepTwo
          details={{
            age: formData.age,
            gender: formData.gender,
          }}
          nextStep={setStep2}
          prevStep={goPrevStep}
        />
      )}
      {step === 3 && (
        <StepThree
          company={{
            companyName: formData.companyName,
            companyCode: formData.companyCode,
          }}
          nextStep={setStep3}
          prevStep={goPrevStep}
        />
      )}
      {step === 4 && <StepFour formData={formData} />}
    </div>
  );
}

export default FormContainer;
/*  */
