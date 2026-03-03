function Resume({ resumeData }) {
  return (
    <div className='resume-container'>
      <div className='resume-page'>
        <p>{resumeData.firstName || 'First'}</p>
        <p>{resumeData.lastName || 'Last'}</p>
        <p>{resumeData.email || 'Email Address'}</p>
        <p>{resumeData.phone || 'Phone Number'}</p>
        <p>{resumeData.summary || 'Enter summary about yourself'}</p>
        <h2>Skills</h2>
        <ul>
          {resumeData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
        <h2>Education</h2>
        <p>{resumeData.education.certificate || 'Select Level'}</p>
        <p>{resumeData.education.school || 'School'} | {resumeData.education.location || 'Location'}</p>
        <p>{resumeData.education.date || 'Graduated'}</p>
        <h2>Work History</h2>
        <p>{resumeData.workHistory.position || 'Position'}</p>
        <p>{resumeData.workHistory.startDate || 'Start Date'} - {resumeData.workHistory.endDate || 'Present'} | {resumeData.workHistory.company || 'Company'}</p>
        <p>{resumeData.workHistory.details || 'Work Responsibilities'}</p>
      </div>
    </div>
  )
}

export default Resume
