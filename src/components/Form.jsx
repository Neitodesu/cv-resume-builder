function Form({ resumeData, setResumeData }) {
  function handleInputChange(e) {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    })
  }

  function handleEducationInput(e) {
    setResumeData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        certificate: e.target.value
      }
    }))
  }

  return (
    <div className="form-container">
      <h1 className="form-header">Inkframe</h1>
      <div>
        <h2 className="details-heading">Details about you</h2>
        <div className="form-name-info">
          <div>
            <p>First Name</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-contact-info">
          <div>
            <p>Email Address</p>
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="fake123@fakeemail.com"
            />
          </div>
          <div>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={handleInputChange}
              name="phone"
              placeholder="(555)555-5555"
            />
          </div>
        </div>
      </div>
      <h2>Summary</h2>
      <textarea
        rows={8}
        cols={50}
        maxLength={180}
        onChange={handleInputChange}
        name={'summary'}
        placeholder='Enter Summary (Max 180 Characters)'
      />
      <div>
        <h2>Education</h2>
        <p>Degree/Diploma</p>
        <select onChange={handleEducationInput}>
          <option value={''}>Select Level</option>
          <option value={'GED or equivalent'}>GED or equivalent</option>
          <option value={'High School Diploma'}>High School Diploma</option>
          <option value={'Associate\'s Degree'}>Associate's Degree</option>
          <option value={'Bachelor\'s Degree'}>Bachelor's Degree</option>
          <option value={'Masters\'s Degree'}>Masters's Degree</option>
        </select>
      </div>
    </div >
  )
}

export default Form
