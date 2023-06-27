import { useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import * as htmlToImage from 'html-to-image'
import jsPDF from "jspdf"
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
  
  const previewRef = useRef()
  const exportPdf = async () => {
    const preview = previewRef.current
    await htmlToImage.toPng(preview, {canvasWidth: 3508, canvasHeight: 2480})
      .then((dataURL) => {
        const img = new Image()
        img.src = dataURL
        const pdf = new jsPDF()
        const width = pdf.internal.pageSize.getWidth()
        const height = pdf.internal.pageSize.getHeight()
        pdf.addImage(img, 'PNG', 0, 0, width, height, undefined, 'FAST')
        pdf.save('cv.pdf')
      })
  }

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

            exportPdf={exportPdf}
      />
      <Preview  personalFormData={personalFormData}
                experienceItems={experienceItems} 
                educationItems={educationItems}
                skillsItems={skillsItems}
                ref={previewRef}
      />
    </div>
  )
}