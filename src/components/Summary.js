import React from "react";
import { AddOnComponent } from "./AddOnComponent";
import { data } from "../data";

export function Summary(props) {

  const planPrices = Object.fromEntries(data.plan.map(n => [n.planTitle, n.planPrice]));
  const addOnPrices = Object.fromEntries(data.addOn.map(n => [n.addOnTitle, n.addOnPrice]));

  const addOnSum = props.selectedAddOns.reduce((a, b) => { return a + addOnPrices[b][props.isMonthly ? "monthly" : "yearly"] }, 0);
  let totalSum = 0;
  if (props.selectedPlan) {
    totalSum = planPrices[props.selectedPlan][props.isMonthly ? "monthly" : "yearly"] + addOnSum;
  }

  const addOnElements = props.selectedAddOns.map(element =>
    <AddOnComponent
      addOnTitle={element}
      key={element}
      addOnPrices={addOnPrices}
      isMonthly={props.isMonthly}
    />)

  return (
    <>
      {!props.selectedPlan && <button className="choose-button" onClick={() => props.setStep(2)}>Choose something</button>}
      {props.selectedPlan && <div className="summary__block">
        <div className="summary__add-on">
          <div>
            <h3>
              {props.selectedPlan} ({props.isMonthly ? "Monthly" : "Yearly"})
            </h3>
            <button onClick={() => props.setStep(2)}>
              Change
            </button>
          </div>
          <div className="summary__add-on-price">
            ${planPrices[props.selectedPlan][props.isMonthly ? "monthly" : "yearly"]}/{props.isMonthly ? "mo" : "yr"}
          </div>
        </div>
        {!!addOnElements.length && <div className="summary__divider"></div>}
        {addOnElements}
      </div>}

      <div className="summary__footer">
        <div>
          Total (per {props.isMonthly ? "month" : "year"})
        </div>
        <div className="summary__footer-price">
          ${totalSum}/{props.isMonthly ? "mo" : "yr"}
        </div>
      </div>
    </>
  )
}