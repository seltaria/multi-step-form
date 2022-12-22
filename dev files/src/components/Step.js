import React from "react";

export function Step(props) {
  const styles = {
    backgroundColor: props.step === props.stepNumber ? "hsl(228, 100%, 84%)" : "transparent",
    borderColor: props.step === props.stepNumber === true ? "hsl(228, 100%, 84%)" : "white",
    color: props.step === props.stepNumber === true ? "black" : "white",
  }

  function handleClick() {
    props.check()
    props.setStep(props.stepNumber)
  }

  return (
    <div className="step">
      <button
        className="step__button"
        onClick={handleClick}
        style={styles}
      >
        {props.stepNumber}
      </button>
      <div>
        <h2 className="step__title">
          STEP {props.stepNumber}
        </h2>
        <div className="step__name">
          {props.stepTitle}
        </div>
      </div>
    </div>
  )
}