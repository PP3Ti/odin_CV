export default function PreviewSkills({ skillsItems }) {
  return (
    <div className="preview-skills">
      <p className="secondary-header">Skills</p>
      <ul>
        {skillsItems.map(item => 
          <li className="preview-skill thin" key={item.id}>{item.skill}</li>
        )}
      </ul>
    </div>
  )
}