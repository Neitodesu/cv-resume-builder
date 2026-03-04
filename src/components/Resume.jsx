function Resume({ resumeData }) {
  return (
    <div className='resume-container'>
      <div className='resume-page'>
        <div className="resume-left-section">
          <div className="resume-contact">
            <h3>Phone Number</h3>
            <p>{resumeData.phone || '(555)555-5555'}</p>
            <h3>Email</h3>
            <p>{resumeData.email || 'fake123@fakeemail.com'}</p>
          </div>
          <div className="resume-education">
            <h2>Education</h2>
            <p>{resumeData.education.certificate || 'Select Level'}</p>
            <p>{resumeData.education.school || 'School'} | {resumeData.education.location || 'Location'}</p>
            <p>{resumeData.education.date || 'Graduated'}</p>
          </div>
          <div className="resume-skills"></div>
          <h2>Skills</h2>
          <ul>
            {resumeData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className="resume-right-section">
          <div className="resume-name">
            <p className="resume-first-name">{resumeData.firstName.toUpperCase() || 'FAKE'}</p>
            <p className="resume-last-name">{resumeData.lastName || 'PERSON'}</p>
            <p className="resume-title">| consectetur, adipisci velit</p>
          </div>
          <div className="resume-summary">
            <h3>Summary</h3>
            <p>{resumeData.summary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non sodales ex. Ut vulputate, arcu in ultrices blandit, tortor mauris posuere lorem, at facilisis ante nisi vitae ipsum. Sed facilisis. '}</p>
          </div>
          <div className="resume-history">
            <h2>Work History</h2>
            <p>{resumeData.workHistory.position || 'Position'}</p>
            <p>{resumeData.workHistory.startDate || 'Start Date'} - {resumeData.workHistory.endDate || 'Present'} | {resumeData.workHistory.company || 'Company'}</p>
            <p>{resumeData.workHistory.details || 'Work Responsibilities'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
