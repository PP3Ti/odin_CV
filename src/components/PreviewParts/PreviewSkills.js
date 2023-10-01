export default function PreviewSkills({ skillsItems, language }) {
  return (
    <div className="preview-skills">
      <p className="secondary-header">{language === 'en' ? 'Skills' : 'Készségek'}</p>
      <ul>
        {skillsItems.map(item => 
          <li className="preview-skill thin" key={item.id}>{item.skill}</li>
        )}
      </ul>
    </div>
  )
}