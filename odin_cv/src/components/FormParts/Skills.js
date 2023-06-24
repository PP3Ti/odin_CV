export default function Skills({ skillsInitialState, skillsItems, setSkillsItems, skillsFormData, setSkillsFormData }) {

  function handleChange(e) {
    const { name, value } = e.target
    setSkillsFormData(data => ({...data, [name]: value}))
  }

  function handleAddClick(e) {
    e.preventDefault()
    setSkillsItems(skillsItems => [...skillsItems, skillsFormData])
    setSkillsFormData(data => ({...data, ...skillsInitialState}))
  }

  const handleEdit = (id) => (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setSkillsItems((items) =>
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
    setSkillsItems(items =>
    items.filter((item) => item.id !== id)
  )
  }

  return (
    <fieldset className="skills-fieldset">
      <legend>Skills</legend>
        <>
          {skillsItems.map(item => 
            <div className='skill-item' key={item.id} id={item.id}>
              <input  type="text"
                      name="skill"
                      placeholder="skill"
                      value={item.skill}
                      onChange={handleEdit(item.id)}
              />
              <button onClick={handleDeleteClick(item.id)}>Delete</button>
            </div>
          )}
        </>
      <input  type="text"
              name="skill"
              placeholder="Skill"
              value={skillsFormData.skill}
              onChange={handleChange}
      />
      <button onClick={handleAddClick}>Add</button>
    </fieldset>
  )

}