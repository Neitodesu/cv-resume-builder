function Resume({ resumeData }) {
  return (
    <div className='resume-container'>
      <div className='resume-page'>
        <p>{resumeData.firstName || 'First'}</p>
        <p>{resumeData.lastName || 'Last'}</p>
        <p>{resumeData.email || 'Email Address'}</p>
        <p>{resumeData.phone || 'Phone Number'}</p>
        <p>{resumeData.summary || 'Enter summary about yourself'}</p>
        <h2>Education</h2>
        <p>{resumeData.education.certificate || 'Select Level'}</p>
        <p>{resumeData.education.school || 'School'} {resumeData.education.location || 'Location'} {resumeData.education.date || 'Graduated'}</p>
        <h2>Skills</h2>
        <ul>
          {resumeData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Resume
