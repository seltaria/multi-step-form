import React from "react";

export function Plan(props) {

  const styles = {
    backgroundColor: props.selectedPlan === props.planTitle ? "hsl(217, 100%, 97%)" : "transparent",
    borderColor: props.selectedPlan === props.planTitle ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)",
  }

  return (
    <div className="plan" style={styles} onClick={props.select}>
      <img className="plan__img" src={`/assets/images/${props.planImg}`} alt="" />
      <div className="plan__text">
        <h3 className="plan__title">
          {props.planTitle}
        </h3>
        <div className="plan__price">
          ${props.planPrice[props.isMonthly ? "monthly" : "yearly"]}/{props.isMonthly ? "mo" : "yr"}
        </div>
        {!props.isMonthly && <div className="plan__bonus">2 months free</div>}
      </div>
    </div>
  )
}