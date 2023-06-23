import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"

export default function Experience() {

  const initialState = {position: '', company: '', from: '',
                        to: '', id: uuidv4()}       

  const [experienceItems, setExperienceItems] = useState([])
  const [experinceFormData, setExperienceFormData] = useState(initialState)
                                
  function handleChange(e) {
    const { name, value } = e.target
    setExperienceFormData(data => ({...data, [name]: value}))
  }       
  function handleAddClick(e) {
    e.preventDefault()
    setExperienceItems(experienceItems => [...experienceItems, experinceFormData])
    setExperienceFormData(data => ({...data, ...initialState}))
  }    
  const handleEdit = (id) => (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setExperienceItems((items) =>
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
    setExperienceItems(items =>
    items.filter((item) => item.id !== id)
  )
  }

  return (
    <fieldset className='experience-fieldset'>
      <legend>Experience</legend> 
      <>
        {experienceItems.map(item =>
          <div className='experience-item' key={item.id} id={item.id}>
            <input  type="text"
                    name="position"
                    placeholder="Position"
                    value={item.position}
                    onChange={handleEdit(item.id)}
            />
            <input  type="text"
                    name="degree"
                    placeholder="Degree"
                    value={item.degree}
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
              name="position"
              placeholder="Position"
              value={experinceFormData.position}
              onChange={handleChange}
      />
      <input  type="text"
              name="company"
              placeholder="Company"
              value={experinceFormData.company}
              onChange={handleChange}
      />
      <input  type="month"
              name="from"
              placeholder="From"
              value={experinceFormData.from}
              onChange={handleChange}
      />
      <input  type="month"
              name="to"
              placeholder="To"
              value={experinceFormData.to}
              onChange={handleChange}
      />
      <button onClick={handleAddClick}>Add</button>
    </fieldset>
  )
}