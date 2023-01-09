import React from "react";

export function ThankYou(props) {

  /* Save all results as an object: */
  const result = {
    name: props.formData.name,
    email: props.formData.email,
    phone: props.formData.phone,
    plan: `${props.selectedPlan}, ${props.isMonthly ? "monthly" : "yearly"}`,
    addOns: props.selectedAddOns,
  }
  console.log(result)

  return (
    <div className="thanks">
      <img className="thanks__icon" src="/assets/images/icon-thank-you.svg" alt="" />
      <h2 className="thanks__title">
        Thank you!
      </h2>
      <p className="thanks__text">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com
      </p>
    </div>
  )
}