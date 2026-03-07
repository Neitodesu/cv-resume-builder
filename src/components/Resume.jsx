function Resume({ resumeData }) {
  return (
    <div className='resume-container'>
      <div className='resume-page' id="resumePage">
        <div className="resume-left-section">
          <div className="resume-contact">
            <h3>Phone Number</h3>
            <p>{resumeData.phone || '(555)-555-5555'}</p>
            <h3>Email</h3>
            <p>{resumeData.email || 'fake123@fakeemail.com'}</p>
          </div>
          <div className="resume-education">
            <h2>Education</h2>
            <p>{resumeData.education.certificate || 'Master\'s Degree'}</p>
            <p>{resumeData.education.school || 'ABC University'}</p>
            <p>{resumeData.education.date || 'MM/DD/YYYY'}</p>
          </div>
          <div className="resume-skills">
            <h2>Skills</h2>
            <ul>
              {resumeData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </div>
        <div className="resume-right-section">
          <div className="resume-name">
            <div>
              <p className="resume-first-name">{resumeData.firstName || 'FAKE'}</p>
              <p className="resume-last-name">{resumeData.lastName || 'PERSON'}</p>
            </div>
            <p className="resume-title">| {resumeData.title || 'consectetur, adipisci velit'}</p>
          </div>
          <div className="resume-summary">
            <h2>Summary</h2>
            <p>{resumeData.summary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non sodales ex. Ut vulputate, arcu in ultrices blandit, tortor mauris posuere lorem, at facilisis ante nisi vitae ipsum. Sed facilisis. '}</p>
          </div>
          <div className="resume-history">
            <h2>Work History</h2>
            <p>{resumeData.workHistory.position || 'Supervisor'}</p>
            <p>{resumeData.workHistory.startDate || 'MM/DD/YYYY'} - {resumeData.workHistory.endDate || 'Present'} | {resumeData.workHistory.company || 'Company'}</p>
            <p>{resumeData.workHistory.details || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non sodales ex. Ut vulputate, arcu in ultrices blandit, tortor mauris posuere lorem, at facilisis ante nisi vitae ipsum. Sed facilisis. '}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
