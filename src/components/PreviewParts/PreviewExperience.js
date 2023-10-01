export default function PreviewExperience({ experienceItems }) {
  return (
    <div className="preview-experience">
      {experienceItems.map(item => 
        <div className="preview-experience-item" key={item.id}>
          <p className="secondary-header experience-title">
            {item.position}
            <span className="thin" style={{fontSize:'0.9rem', alignSelf:'flex-end'}}>{item.from}{'  -  '}{item.to}</span>
          </p>
          <p style={{fontWeight:'600', marginBottom:'5px'}}>{item.company}</p>
          <textarea  value={item.description} readOnly={true} style={{minHeight:'100px'}}>
          </textarea>
        </div>
      )}
    </div>
  )
}