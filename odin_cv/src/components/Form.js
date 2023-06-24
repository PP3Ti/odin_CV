import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

import PersonalInformation from "./FormParts/PersonalInformation"
import Education from "./FormParts/Education"
import Experience from "./FormParts/Experience"
import Skills from "./FormParts/Skills"
import DocumentControl from "./DocumentControl"

export default function Form() {

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
    <form>
      <PersonalInformation  personalFormData={personalFormData} 
                            setPersonalFormData={setPersonalFormData}
      />
      <Experience experienceInitialState={experienceInitialState} 
                  experienceItems={experienceItems} 
                  setExperienceItems={setExperienceItems} 
                  experinceFormData={experinceFormData} 
                  setExperienceFormData={setExperienceFormData}
      />
      <Education  educationInitialState={educationInitialState} 
                  educationItems={educationItems} 
                  setEducationItems={setEducationItems} 
                  educationFormData={educationFormData} 
                  setEducationFormData={setEducationFormData}
      />
      <Skills skillsInitialState={skillsInitialState}
              skillsItems={skillsItems}
              setSkillsItems={setSkillsItems}
              skillsFormData={skillsFormData}
              setSkillsFormData={setSkillsFormData}
      />
      <DocumentControl  personalInitialState={personalInitialState}
                        setPersonalFormData={setPersonalFormData}
      
                        experienceInitialState={experienceInitialState} 
                        setExperienceItems={setExperienceItems}
                        setExperienceFormData={setExperienceFormData}

                        educationInitialState={educationInitialState} 
                        setEducationItems={setEducationItems} 
                        setEducationFormData={setEducationFormData}

                        skillsInitialState={skillsInitialState}
                        setSkillsItems={setSkillsItems}
                        setSkillsFormData={setSkillsFormData}
      />
    </form>
  )
}
