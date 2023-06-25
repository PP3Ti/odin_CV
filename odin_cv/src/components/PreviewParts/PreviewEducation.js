export default function PreviewEducation({ educationItems }) {
  return (
    <div className="preview-education">
      {educationItems.map(item => 
        <div className="preview-education-item" key={item.id}>
          <p className="secondary-header">{item.degree}</p>
          <p className="thin">{item.from}{'  -  '}{item.to}</p>
          <p className="thin">{item.institution}</p>
          <p className="thin">{item.subject}</p>
        </div>
      )}
    </div>
  )
}