export default function Experience({ experienceInitialState, experienceItems, setExperienceItems, experinceFormData, setExperienceFormData }) {

  function handleChange(e) {
    const { name, value } = e.target
    setExperienceFormData(data => ({...data, [name]: value}))
  }       
  function handleAddClick(e) {
    e.preventDefault()
    setExperienceItems(experienceItems => [...experienceItems, experinceFormData])
    setExperienceFormData(data => ({...data, ...experienceInitialState}))
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
                    name="company"
                    placeholder="Company"
                    value={item.company}
                    onChange={handleEdit(item.id)}
            />
            <input  type="text"
                    name="from"
                    placeholder="From"
                    value={item.from}
                    onChange={handleEdit(item.id)}
            />
            <input  type="text"
                    name="to"
                    placeholder="To"
                    value={item.to}
                    onChange={handleEdit(item.id)}
            />
            <textarea  
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={handleEdit(item.id)}
              className="description"
              rows={5}
      ></textarea>
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
      <input  type="text"
              name="from"
              placeholder="From"
              value={experinceFormData.from}
              onChange={handleChange}
      />
      <input  type="text"
              name="to"
              placeholder="To"
              value={experinceFormData.to}
              onChange={handleChange}
      />
      <textarea  
              name="description"
              placeholder="Description"
              value={experinceFormData.description}
              onChange={handleChange}
              className="description"
              rows={5}
      ></textarea>
      <button onClick={handleAddClick}>Add</button>
    </fieldset>
  )
}