import { forwardRef } from 'react'
import PreviewEducation from './PreviewParts/PreviewEducation'
import PreviewExperience from './PreviewParts/PreviewExperience'
import PreviewPersonal from './PreviewParts/PreviewPersonal'
import PreviewSkills from './PreviewParts/PreviewSkills'

const Preview = forwardRef(({ personalFormData, experienceItems, educationItems, skillsItems, language }, ref) => {
  return (
    <div className="preview" ref={ref}>
      <PreviewPersonal personalFormData={personalFormData} language={language}/>
      <PreviewExperience experienceItems={experienceItems} language={language}/>
      <PreviewEducation educationItems={educationItems} language={language}/>
      <PreviewSkills skillsItems={skillsItems} language={language}/>
    </div>
  )
})

export default Preview