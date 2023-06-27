import house from '../../assets/house.svg'
import phone from '../../assets/phone.svg'
import email from '../../assets/email.svg'
import gh from '../../assets/gh.svg'

export default function PreviewPersonal({ personalFormData }) {
  return (
    <div className="preview-personal">
      <div className="introduction">
        <div className="name">
          {personalFormData.firstName} {' '} {personalFormData.lastName}
        </div>
        <div className="title">
          {personalFormData.title}
        </div>
      </div>
      <div className="personal-container">
        <div className="personal-info">
          <p className="secondary-header">Contacts</p>
          <ul>
            <li>
              <img src={house} alt='icon of a house' style={{width:'14px', marginRight:'7px'}}></img> 
              {personalFormData.address}
            </li>
            <li>
              <img src={phone} alt='icon of a telephone' style={{width:'14px', marginRight:'7px'}}></img> 
              {personalFormData.phoneNumber}
            </li>
            <li>
              <img src={email} alt='icon of an envelope' style={{width:'14px', marginRight:'7px'}}></img> 
              {personalFormData.email}
            </li>
            <li>
              <img src={gh} alt='icon for social media link' style={{width:'14px', marginRight:'7px'}}></img> 
              {personalFormData.github}
            </li>
          </ul>
        </div>
        <div className="personal-description">
          <p className="secondary-header">Description</p>
          <textarea  value={personalFormData.description} readOnly={true}>
          </textarea>
        </div>
      </div>
    </div>
  )
}