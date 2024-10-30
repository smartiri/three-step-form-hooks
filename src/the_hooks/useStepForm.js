import { useEffect, useState } from "react";

function useStepForm() {
  const [formData, setFormData] = useState({
    step: 1,
    name: "",
    surname: "",
    age: "",
    gender: "",
    companyName: "",
    companyCode: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    setFormData((fd) => (!storedData ? fd : JSON.parse(storedData)));
  }, []);

  const setStep1 = (name, surname) =>
    setFormData((fd) => ({ ...fd, name, surname, step: 2 }));

  const setStep2 = (age, gender) =>
    setFormData((fd) => ({ ...fd, age, gender, step: 3 }));

  const setStep3 = (companyName, companyCode) =>
    setFormData((fd) => ({ ...fd, companyName, companyCode, step: 4 }));

  const goPrevStep = () => setFormData((fd) => ({ ...fd, step: fd.step - 1 }));

  return {
    formData,
    setStep1,
    setStep2,
    setStep3,
    goPrevStep,
  };
}

export default useStepForm;
