import React from "react";
import { Content } from "./components/Content";
import { Steps } from "./components/Steps";
import { ThankYou } from "./components/ThankYou";

export function App() {
  const [step, setStep] = React.useState(1);
  const [isMonthly, setIsMonthly] = React.useState(true);
  const [selectedPlan, setSelectedPlan] = React.useState("");
  const [selectedAddOns, setSelectedAddOns] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  })

  return (
    <div className="app">
      <Steps
        step={step}
        setStep={setStep}
      />
      {step !== 5 && <Content
        step={step}
        setStep={setStep}
        isMonthly={isMonthly}
        setIsMonthly={setIsMonthly}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        selectedAddOns={selectedAddOns}
        setSelectedAddOns={setSelectedAddOns}
        formData={formData}
        setFormData={setFormData}
      />}
      {step === 5 &&
        <ThankYou
          isMonthly={isMonthly}
          selectedPlan={selectedPlan}
          selectedAddOns={selectedAddOns}
          formData={formData}
        />}
    </div>
  );
}
