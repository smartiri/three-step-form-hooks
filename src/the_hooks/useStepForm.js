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

  const setStep1 = (name, surname) => {
    if (name !== "" && surname !== "") {
      return setFormData((fd) => ({ ...fd, name, surname, step: 2 }));
    }
    return console.log("Enter name and surname");
  };

  const setStep2 = (age, gender) => {
    if (age !== "" && gender !== "") {
      return setFormData((fd) => ({ ...fd, age, gender, step: 3 }));
    }
    return console.log("Enter age and gender");
  };

  const setStep3 = (companyName, companyCode) => {
    if (companyName !== "" && companyCode !== "") {
      return setFormData((fd) => ({
        ...fd,
        companyName,
        companyCode,
        step: 4,
      }));
    }
    return console.log("Enter company name and code");
  };

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
