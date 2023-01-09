import React from "react";
import { data } from "../data";
import { Plan } from "./Plan";

export function SelectPlan(props) {
  function toggleSlider() {
    props.setIsMonthly(prevState => !prevState)
  }

  const planArray = data.plan;

  function select(id) {
    props.setSelectedPlan(id)
  }

  const planElements = planArray.map(element =>
    <Plan
      key={element.planTitle}
      planImg={element.planImg}
      planTitle={element.planTitle}
      planPrice={element.planPrice}
      selectedPlan={props.selectedPlan}
      isMonthly={props.isMonthly}
      select={() => select(element.planTitle)}
    />)

  return (
    <>
      <div className="plan__list">
        {planElements}
      </div>
      <div className="plan__panel">
        <span className="plan__monthly"
          style={{ color: props.isMonthly ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)" }}>
          Monthly</span>
        <div className="plan__slider"
          style={{ justifyContent: props.isMonthly ? "flex-start" : "flex-end" }}
          onClick={toggleSlider}>
          <div className="plan__slider-circle"></div>
        </div>
        <span className="plan__yearly"
          style={{ color: props.isMonthly ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)" }}>
          Yearly</span>
      </div>
    </>
  )
}