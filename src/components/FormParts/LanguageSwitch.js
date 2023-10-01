export default function LanguageSwitch({ language, setLanguage, toggleLanguage }) {
  return (
    <button className="toggle-language" 
            onClick={toggleLanguage}
    >
      Toggle Language
    </button>
  )
}