import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Form from './components/Form'
import Preview from './components/Preview'

export default function Main() {

  const personalInitialState = {
    firstName: '', 
    lastName: '', 
    title: '', 
    address: '', 
    phoneNumber: '', 
    email: '',
    github: '', 
    description: ''
  }
  const [personalFormData, setPersonalFormData] = useState(personalInitialState)

  const experienceInitialState = {
    position: '', 
    company: '',
    from: '',
    to: '', 
    description: '', 
    id: uuidv4()
  }                                       
  const [experienceItems, setExperienceItems] = useState([])
  const [experinceFormData, setExperienceFormData] = useState(experienceInitialState)

  const educationInitialState = {
    institution: '', 
    degree: '',
    subject: '',
    from: '',
    to: '',
    id: uuidv4()
  }
  const [educationItems, setEducationItems] = useState([])
  const [educationFormData, setEducationFormData] = useState(educationInitialState)

  const skillsInitialState = {skill: '', id: uuidv4()}
  const [skillsItems, setSkillsItems] = useState([])
  const [skillsFormData, setSkillsFormData] = useState(skillsInitialState)

              
  return (
    <div className='main'>
      <Form personalInitialState={personalInitialState}
            personalFormData={personalFormData} 
            setPersonalFormData={setPersonalFormData}

            experienceInitialState={experienceInitialState}
            experienceItems={experienceItems} 
            setExperienceItems={setExperienceItems} 
            experinceFormData={experinceFormData} 
            setExperienceFormData={setExperienceFormData}

            educationInitialState={educationInitialState} 
            educationItems={educationItems} 
            setEducationItems={setEducationItems} 
            educationFormData={educationFormData} 
            setEducationFormData={setEducationFormData}

            skillsInitialState={skillsInitialState}
            skillsItems={skillsItems}
            setSkillsItems={setSkillsItems}
            skillsFormData={skillsFormData}
            setSkillsFormData={setSkillsFormData}
      />
      <Preview  personalFormData={personalFormData}
                experienceItems={experienceItems} 
                educationItems={educationItems}
                skillsItems={skillsItems}
      />
    </div>
  )
}