import React from "react";
import { AddOn } from "./AddOn";
import { data } from "../data";

export function AddOns(props) {

  const addOnArray = data.addOn;

  function selectAddOn(title) {
    props.setSelectedAddOns(prevAddOns => !prevAddOns.includes(title) ? [...prevAddOns, title] : prevAddOns.filter(el => el !== title))
  }

  const addOnElements = addOnArray.map(element =>
    <AddOn
      addOnTitle={element.addOnTitle}
      addOnDescr={element.addOnDescr}
      addOnPrice={element.addOnPrice}
      key={element.addOnTitle}
      isMonthly={props.isMonthly}
      selectedAddOns={props.selectedAddOns}
      selectAddOn={() => selectAddOn(element.addOnTitle)}
    />)

  return (
    <>
      {addOnElements}
    </>
  )
}