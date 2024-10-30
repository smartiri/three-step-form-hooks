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
      setFormData((fd) => ({ ...fd, name, surname, step: 2 }));
      return localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, name, surname, step: 2 })
      );
    }
    return console.log("Enter name and surname");
  };

  const setStep2 = (age, gender) => {
    if (age !== "" && gender !== "") {
      setFormData((fd) => ({ ...fd, age, gender, step: 3 }));
      return localStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, age, gender, step: 3 })
      );
    }
    return console.log("Enter age and gender");
  };

  const setStep3 = (companyName, companyCode) => {
    if (companyName !== "" && companyCode !== "") {
      setFormData((fd) => ({
        ...fd,
        companyName,
        companyCode,
        step: 4,
      }));
      return localStorage.setItem(
        "formData",
        JSON.stringify({
          ...formData,
          companyName,
          companyCode,
          step: 1,
        })
      );
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
