import React from "react";
import { AddOns } from "./AddOns";
import { PersonalInfo } from "./PersonalInfo";
import { SelectPlan } from "./SelectPlan";
import { Summary } from "./Summary";

export function Content(props) {
  const [isValid, setIsValid] = React.useState(true);

  let infoTitle = "";
  let infoText = "";

  /* Title and description for each step: */
  switch (props.step) {
    case 1:
      infoTitle = "Personal info";
      infoText = "Please provide your name, email address, and phone number."
      break;
    case 2:
      infoTitle = "Select your plan";
      infoText = "You have the option of monthly or yearly billing.";
      break;
    case 3:
      infoTitle = "Pick add-ons";
      infoText = "Add-ons help enhance your gaming experience."
      break;
    case 4:
      infoTitle = "Finishing up";
      infoText = "Double-check everything looks OK before confirming.";
      break;
    default:
      infoTitle = ""
      infoText = "";
  }

  function clickNext() {
    if (Object.values(props.formData).includes('')) {
      props.setStep(1);
      setIsValid(false);
      return;
    }
    else if (!props.selectedPlan) {
      props.setStep(2);
      return;
    }
    props.setStep(prevStep => prevStep + 1);
  }

  function clickBack() {
    props.setStep(prevStep => prevStep - 1);
  }

  return (
    <div className="info">
      <h2 className="info__title">
        {infoTitle}
      </h2>
      <p className="info__description">
        {infoText}
      </p>

      {props.step === 1 &&
        <PersonalInfo
          formData={props.formData}
          setFormData={props.setFormData}
          isValid={isValid}
          setIsValid={setIsValid}
        />}
      {props.step === 2 &&
        <SelectPlan
          isMonthly={props.isMonthly}
          setIsMonthly={props.setIsMonthly}
          selectedPlan={props.selectedPlan}
          setSelectedPlan={props.setSelectedPlan} />}
      {props.step === 3 &&
        <AddOns
          isMonthly={props.isMonthly}
          selectedAddOns={props.selectedAddOns}
          setSelectedAddOns={props.setSelectedAddOns}
        />}
      {props.step === 4 &&
        <Summary
          isMonthly={props.isMonthly}
          selectedPlan={props.selectedPlan}
          selectedAddOns={props.selectedAddOns}
          setStep={props.setStep}
        />}

      <div className="buttons">
        <button
          className="prev-step"
          onClick={clickBack}>
          {props.step !== 1 && "Go Back"}
        </button>
        <button
          className="next-step"
          onClick={clickNext}>
          {props.step !== 4 ? "Next Step" : "Confirm"}
        </button>
      </div>
    </div>
  )
}