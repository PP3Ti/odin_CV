import { useState } from "react"

export default function PersonalInformation() {

  const [personalFormData, setPersonalFormData] = useState({firstName: '', lastName: '', title: '', 
                                                            address: '', phoneNumber: '', email: ''})

  function handleChange(e) {
    const { name, value } = e.target
    setPersonalFormData(data => ({...data, [name]: value}))
  }

  return (
    <fieldset className="personal-info-fieldset">
      <legend>Personal Information</legend>
      <input  type="text" 
              name="firstName"
              placeholder="First Name"
              value={personalFormData.firstName}
              onChange={handleChange}
      />
      <input  type="text" 
              name="lastName"
              placeholder="Last Name"
              value={personalFormData.lastName}
              onChange={handleChange}
      />
      <input  type="text" 
              name="title"
              placeholder="Title"
              value={personalFormData.title}
              onChange={handleChange}
      />
      <input  type="text" 
              name="address"
              placeholder="Address"
              value={personalFormData.address}
              onChange={handleChange}
      />
      <input  type="tel" 
              name="phoneNumber"
              placeholder="Phone Number"
              value={personalFormData.phoneNumber}
              onChange={handleChange}
      />
      <input  type="email" 
              name="email"
              placeholder="E-mail"
              value={personalFormData.email}
              onChange={handleChange}
      />
    </fieldset>
  )
}