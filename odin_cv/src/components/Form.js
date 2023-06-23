import PersonalInformation from "./FormParts/PersonalInformation"
import Education from "./FormParts/Education"
import Experience from "./FormParts/Experience"

export default function Form() {

  return (
    <form>
      <PersonalInformation />
      <Experience />
      <Education />
    </form>
  )
}
