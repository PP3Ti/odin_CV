import PreviewEducation from './PreviewParts/PreviewEducation'
import PreviewExperience from './PreviewParts/PreviewExperience'
import PreviewPersonal from './PreviewParts/PreviewPersonal'
import PreviewSkills from './PreviewParts/PreviewSkills'

export default function Preview({ personalFormData, experienceItems, educationItems, skillsItems }) {
  return (
    <div className="preview">
      <PreviewPersonal personalFormData={personalFormData} />
      <PreviewExperience experienceItems={experienceItems} />
      <PreviewEducation educationItems={educationItems} />
      <PreviewSkills skillsItems={skillsItems} />
    </div>
  )
}