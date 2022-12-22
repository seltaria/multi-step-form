import React from "react";

export function AddOnComponent(props) {
  return (
    <div className="summary__add">
      <div>
        {props.addOnTitle}
      </div>
      <span>
        +${props.addOnPrices[props.addOnTitle][props.isMonthly ? "monthly" : "yearly"]}/{props.isMonthly ? "mo" : "yr"}
      </span>
    </div>
  )
}