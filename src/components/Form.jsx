import { useState } from 'react'
import { parseISO, format } from 'date-fns'
import '../css/Form.css'
import logo from '../assets/leaf-logo.svg'

function Form({ resumeData, setResumeData }) {
  const [skill, setSkill] = useState('');

  function handleInputChange(e) {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    })
  }

  function formatEducationDates(e) {
    const newParseDate = parseISO(e.target.value)
    const newDate = format(newParseDate, 'MMM. dd, yyyy')

    setResumeData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [e.target.name]: newDate
      }
    }))
  }

  function formatHistoryDates(e) {
    if (e.target.value === '') {
      setResumeData(prev => ({
        ...prev,
        workHistory: {
          ...prev.workHistory,
          [e.target.name]: 'MM/dd/yyyy'
        }
      }))
    }
    if (e.target.name === 'endDate') {
      setResumeData(prev => ({
        ...prev,
        workHistory: {
          ...prev.workHistory,
          [e.target.name]: 'Present'
        }
      }))
    }
    const newParseDate = parseISO(e.target.value)
    const newDate = format(newParseDate, 'MMM. dd, yyyy')

    setResumeData(prev => ({
      ...prev,
      workHistory: {
        ...prev.workHistory,
        [e.target.name]: newDate
      }
    }))
  }

  function handleEducationInput(e) {
    setResumeData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [e.target.name]: e.target.value
      }
    }))
  }

  function handleWorkHistoryInput(e) {
    setResumeData(prev => ({
      ...prev,
      workHistory: {
        ...prev.workHistory,
        [e.target.name]: e.target.value
      }
    }))
  }

  function handleSkillInput(e) {
    setSkill(e.target.value)
  }

  function updateSkills(e) {
    if (e.key === "Enter") {
      if (skill !== '' && resumeData.skills.length < 5) {
        setResumeData(prev => ({
          ...prev,
          skills: [
            ...prev.skills, skill
          ]
        }))
        setSkill('')
      }
    }
    if (e.target.name === "addBtn") {
      if (skill !== '' && resumeData.skills.length < 5) {
        setResumeData(prev => ({
          ...prev,
          skills: [
            ...prev.skills, skill
          ]
        }))
        setSkill('')
      }
    }
  }

  function resetSkills() {
    setResumeData(prev => ({
      ...prev,
      skills: []
    }))
  }


  return (
    <div className="form-container">
      <div className="form-header">
        <h1>FreeCV</h1>
        <img src={logo} />
      </div>
      <div className='form-details-container flex-col2'>
        <h2>Details about you</h2>
        <div className="flex-row">
          <div className='form-name flex-col1'>
            <p>First Name</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="firstName"
              placeholder="First Name"
            />
            <p>Email Address</p>
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="fake123@fakeemail.com"
            />
            <p>Title</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="title"
              placeholder="e.g. Full Stack Developer"
            />
          </div>
          <div className='form-name flex-col1'>
            <p>Last Name</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="lastName"
              placeholder="Last Name"
            />
            <p>Phone Number</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="phone"
              placeholder="(555)-555-5555"
            />
          </div>
        </div>
      </div>
      <div className='form-summary-container flex-col2'>
        <h2>Summary</h2>
        <textarea
          rows={8}
          maxLength={180}
          onChange={handleInputChange}
          name={'summary'}
          placeholder='Enter Summary (Max 180 Characters)'
        />
      </div>
      <div className='form-education-container flex-col2'>
        <h2>Education</h2>
        <div className='flex-row'>
          <div className='form-school flex-col1'>
            <p>Degree/Diploma</p>
            <select name="certificate" onChange={handleEducationInput}>
              <option value={'Select Level'}>Select Level</option>
              <option value={'GED or equivalent'}>GED or equivalent</option>
              <option value={'High School Diploma'}>High School Diploma</option>
              <option value={'Associate\'s Degree'}>Associate's Degree</option>
              <option value={'Bachelor\'s Degree'}>Bachelor's Degree</option>
              <option value={'Masters\'s Degree'}>Masters's Degree</option>
            </select>
            <p>Graduation Date</p>
            <input
              type="date"
              onChange={formatEducationDates}
              name="date"
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div className='form-school flex-col1'>
            <p>Name of School</p>
            <input
              type="text"
              onChange={handleEducationInput}
              name="school"
              placeholder="ABC University"
            />
          </div>
        </div>
      </div>
      <div className='form-history-container flex-col2'>
        <h2>Work History</h2>
        <div className='form-history-details flex-col2'>
          <div className='form-history-top flex-row'>
            <div className='history-inputs flex-col1'>
              <p>Position</p>
              <input
                type="text"
                onChange={handleWorkHistoryInput}
                name="position"
                placeholder="e.g. Manager"
              />
            </div>
            <div className='history-inputs flex-col1'>
              <p>Company Name</p>
              <input
                type="text"
                onChange={handleWorkHistoryInput}
                name="company"
                placeholder="ABC Industries"
              />
            </div>
          </div>
          <div className='form-history-mid flex-col1'>
            <p>Employment Date</p>
            <div className='form-date-inputs flex-col1'>
              <p>Start Date</p>
              <input
                type="date"
                onChange={formatHistoryDates}
                name="startDate"
              />
              <p>End Date</p>
              <input
                type="date"
                onChange={formatHistoryDates}
                name="endDate"
              />
            </div>
          </div>
          <div className='history-inputs flex-col1'>
            <p>Responsibilities</p>
            <textarea
              rows={8}
              maxLength={180}
              onChange={handleWorkHistoryInput}
              name='details'
              placeholder='Write a breif paragraph detailing responsibilities'
            />
          </div>
        </div>
      </div>
      <div className='form-skills-container flex-col1'>
        <h2>Skills</h2>
        <div className='flex-col1'>
          <p>(Max 5)</p>
          <div className='flex-row'>
            <input
              maxLength={20}
              type="text"
              value={skill}
              onChange={handleSkillInput}
              onKeyDown={updateSkills}
              placeholder="Add Skill"
            />
            <button name='addBtn' onClick={updateSkills}>Add </button>
            <button onClick={resetSkills}>Reset </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Form
