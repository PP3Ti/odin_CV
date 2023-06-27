import { forwardRef } from 'react'
import PreviewEducation from './PreviewParts/PreviewEducation'
import PreviewExperience from './PreviewParts/PreviewExperience'
import PreviewPersonal from './PreviewParts/PreviewPersonal'
import PreviewSkills from './PreviewParts/PreviewSkills'

const Preview = forwardRef(({ personalFormData, experienceItems, educationItems, skillsItems }, ref) => {
  return (
    <div className="preview" ref={ref}>
      <PreviewPersonal personalFormData={personalFormData} />
      <PreviewExperience experienceItems={experienceItems} />
      <PreviewEducation educationItems={educationItems} />
      <PreviewSkills skillsItems={skillsItems} />
    </div>
  )
})

export default Preview