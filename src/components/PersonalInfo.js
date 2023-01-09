import React from "react";

export function PersonalInfo(props) {

  function handleChange(event) {
    let { name, value } = event.target;
    props.setFormData(prevData => ({
      ...prevData,
      [name]: value.trim()
    }))
  }

  return (
    <>
      <div className="info__input">
        <label style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Name</span>
          {!props.isValid && !props.formData.name && <span style={{ color: "hsl(354, 84%, 57%)", fontSize: "12px", fontWeight: 700 }}>This field is required</span>}
        </label>
        <input
          style={!props.isValid && !props.formData.name ? { borderColor: "hsl(354, 84%, 57%)" } : { borderColor: "hsl(231, 11%, 63%)" }}
          placeholder="e.g. Stephan King"
          type="text"
          name="name"
          value={props.formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="info__input">
        <label style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Email Address</span>
          {!props.isValid && !props.formData.email && <span style={{ color: "hsl(354, 84%, 57%)", fontSize: "12px", fontWeight: "700" }}>This field is required</span>}
        </label>
        <input
          style={!props.isValid && !props.formData.email ? { borderColor: "hsl(354, 84%, 57%)" } : { borderColor: "hsl(231, 11%, 63%)" }}
          placeholder="e.g. stephanking@lorem@com"
          type="text"
          name="email"
          value={props.formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="info__input">
        <label style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Phone Number</span>
          {!props.isValid && !props.formData.phone && <span style={{ color: "hsl(354, 84%, 57%)", fontSize: "12px", fontWeight: "700" }}>This field is required</span>}
        </label>
        <input
          style={!props.isValid && !props.formData.phone ? { borderColor: "hsl(354, 84%, 57%)" } : { borderColor: "hsl(231, 11%, 63%)" }}
          placeholder="e.g. +1 234 567 890"
          type="text"
          name="phone"
          value={props.formData.phone}
          onChange={handleChange}
        />
      </div>
    </>
  )
}