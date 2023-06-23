import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"

export default function Education() {

  const initialState = {
    institution: '', 
    degree: '',
    subject: '',
    from: '',
    to: '',
    id: uuidv4()
  }
  const [educationItems, setEducationItems] = useState([])
  const [educationFormData, setEducationFormData] = useState(initialState)
  function handleChange(e) {
    const { name, value } = e.target
    setEducationFormData(data => ({...data, [name]: value}))
  }

  function handleAddClick(e) {
    e.preventDefault()
    setEducationItems(educationItems => [...educationItems, educationFormData])
    setEducationFormData(data => ({...data, ...initialState}))
  }

  const handleEdit = (id) => (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setEducationItems((items) =>
      items.map((item) =>
        item.id === id
        ? {
            ...item,
            [name]: value
          }
        : item
      )
    )
  }

  const handleDeleteClick = (id) => (e) => {
    e.preventDefault()
    setEducationItems(items =>
    items.filter((item) => item.id !== id)
  )
  }
  
  return (
    <fieldset className="education-fieldset">
      <legend>Education</legend>
      <>
        {educationItems.map(item => 
          <div className='education-item' key={item.id} id={item.id}>
            <input  type="text"
                    name="institution"
                    placeholder="Institution"
                    value={item.institution}
                    onChange={handleEdit(item.id)}
            />
            <input  type="text"
                    name="degree"
                    placeholder="Degree"
                    value={item.degree}
                    onChange={handleEdit(item.id)}
            />
            <input  type="text"
                    name="subject"
                    placeholder="Subject"
                    value={item.subject}
                    onChange={handleEdit(item.id)}
            />
            <input  type="month"
                    name="from"
                    placeholder="From"
                    value={item.from}
                    onChange={handleEdit(item.id)}
            />
            <input  type="month"
                    name="to"
                    placeholder="To"
                    value={item.to}
                    onChange={handleEdit(item.id)}
            />
            <button onClick={handleDeleteClick(item.id)}>Delete</button>
          </div>
        )}
      </>
      <input  type="text"
              name="institution"
              placeholder="Institution"
              value={educationFormData.institution}
              onChange={handleChange}
      />
      <input  type="text"
              name="degree"
              placeholder="Degree"
              value={educationFormData.degree}
              onChange={handleChange}
      />
      <input  type="text"
              name="subject"
              placeholder="Subject"
              value={educationFormData.subject}
              onChange={handleChange}
      />
      <input  type="month"
              name="from"
              placeholder="From"
              value={educationFormData.from}
              onChange={handleChange}
      />
      <input  type="month"
              name="to"
              placeholder="To"
              value={educationFormData.to}
              onChange={handleChange}
      />
      <button onClick={handleAddClick}>Add</button>
    </fieldset>
  )
}