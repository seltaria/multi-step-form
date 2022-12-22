import React from "react";

export function AddOn(props) {

  const checkStyles = {
    borderColor: props.selectedAddOns.includes(props.addOnTitle) ? "hsl(243, 100%, 62%)" : "hsl(231, 11%, 63%)",
    backgroundColor: props.selectedAddOns.includes(props.addOnTitle) ? "hsl(243, 100%, 62%)" : "transparent",
  }

  const blockStyles = {
    borderColor: props.selectedAddOns.includes(props.addOnTitle) ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)",
    backgroundColor: props.selectedAddOns.includes(props.addOnTitle) ? "hsl(217, 100%, 97%)" : "transparent",
  }

  return (
    <div className="add-on" onClick={props.selectAddOn} style={blockStyles}>
      <div className="add-on__check" style={checkStyles}>
        <img src="/assets/images/icon-checkmark.svg" alt="" />
      </div>
      <div className="add-on__content">
        <h3>
          {props.addOnTitle}
        </h3>
        <div>
          {props.addOnDescr}
        </div>
      </div>
      <div className="add-on__price">
        +${props.addOnPrice[props.isMonthly ? "monthly" : "yearly"]}/{props.isMonthly ? "mo" : "yr"}
      </div>
    </div>
  )
}