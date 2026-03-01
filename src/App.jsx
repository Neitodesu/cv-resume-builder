import { useState } from 'react'
import Resume from './components/Resume.jsx'
import Form from './components/Form.jsx'
import ThemeSwitchButton from './components/ThemeSwitchButton.jsx'
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    summary: '',
    education: {
      certificate: '',
      school: '',
      location: '',
      date: '',
    },
    skills: ['Pooping', 'Coding', 'Guitar', 'Automotive'],
  })

  return (
    <div className='app-container'>
      <Form resumeData={resumeData} setResumeData={setResumeData} />
      <Resume resumeData={resumeData} />
    </div>
  )
}

export default App
