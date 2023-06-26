import PersonalInformation from "./FormParts/PersonalInformation"
import Education from "./FormParts/Education"
import Experience from "./FormParts/Experience"
import Skills from "./FormParts/Skills"
import DocumentControl from "./FormParts/DocumentControl"

export default function Form({  personalInitialState, personalFormData, setPersonalFormData, 
                                experienceInitialState, experienceItems, setExperienceItems, 
                                experinceFormData, setExperienceFormData, educationInitialState, 
                                educationItems, setEducationItems, educationFormData,
                                setEducationFormData, skillsInitialState, skillsItems, 
                                setSkillsItems, skillsFormData, setSkillsFormData, exportPdf
                        }) {
                  
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

                        exportPdf={exportPdf}
      />
    </form>
  )
}
