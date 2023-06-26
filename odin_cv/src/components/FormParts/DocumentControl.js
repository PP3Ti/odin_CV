export default function DocumentControl({ personalInitialState, setPersonalFormData,  experienceInitialState, setExperienceItems,
                                          setExperienceFormData, educationInitialState, setEducationItems,
                                          setEducationFormData, skillsInitialState, setSkillsItems, setSkillsFormData, exportPdf }) {

  const handleResetClick = (e) => {
    e.preventDefault()
    
    setPersonalFormData(data => ({...data, ...personalInitialState}))

    setExperienceItems([])
    setExperienceFormData(experienceInitialState)

    setEducationItems([])
    setEducationFormData(educationInitialState)

    setSkillsItems([])
    setSkillsFormData(skillsInitialState)
  }

  const handleExportClick = (e) => {
    e.preventDefault()
    exportPdf()
  }


  return  (
    <fieldset className="document-control-buttons">
      <button onClick={handleResetClick} className="reset-button">Reset</button>
      <button onClick={handleExportClick} className="export-button">Export to PDF</button>
    </fieldset>
  )
}