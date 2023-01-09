import React from "react";
import { Step } from "./Step";

export function Steps(props) {
  const [steps, setSteps] = React.useState([
    {
      stepNumber: 1,
      stepTitle: "YOUR INFO",
    },
    {
      stepNumber: 2,
      stepTitle: "SELECT PLAN",
    },
    {
      stepNumber: 3,
      stepTitle: "ADD-ONS",
    },
    {
      stepNumber: 4,
      stepTitle: "SUMMARY",
    }
  ])

  function check(id) {
    setSteps(prevSteps => prevSteps.map(element => {
      return element.stepNumber === id ? { ...element, isChecked: true } : { ...element, isChecked: false }
    }))
  }

  const stepElements = steps.map(step =>
    <Step
      key={step.stepNumber}
      stepNumber={step.stepNumber}
      stepTitle={step.stepTitle}
      step={props.step}
      setStep={props.setStep}
      check={() => check(step.stepNumber)}
    />)

  return (
    <div className="side-panel">
      {stepElements}
    </div>
  )
}