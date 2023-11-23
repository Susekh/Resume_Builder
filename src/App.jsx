import './assets/styles/style.css'
import PersonalInfo from './components/personal_info.jsx'
import EducationInfo from './components/Education_info.jsx'
import { useState } from 'react'
import './assets/styles/cv_style.css'
import "react-datepicker/dist/react-datepicker.css";


function App() {

  const [personalDetails, setPersonalDetails] = useState([
    {value: 'Subhranshu Sekhar Khilar', id: 1},
    {value: '+91 7749848533', id: 2},
    {value: 'subhranshuKhilar@outlook.com', id: 3},
    {value: 'odisha, India', id: 4}
  ])


  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [educationDetails, setEducationDetails] = useState([
    {value: 'Enter college', id:1},
    {value: 'Btech', id:2}
  ])
  date1.getFullYear
  



  return (
    <>
     <div className='cv-body'>
      <div className="fill-contents"> 
          <div className="info-div">

          </div>
          <div className="cv-input-div">
            <PersonalInfo personalDetails = {personalDetails} setPersonalDetails = {setPersonalDetails}/>
            <EducationInfo educationDetails = {educationDetails} setEducationDetails = {setEducationDetails}
             date1={date1} setDate1 = {setDate1} date2={date2} setDate2 = {setDate2}  />
            
          </div>
      </div>
      <div className="cv">
        <div className='cv-personalDatas'>
          <div className='cv-name'><h1>{personalDetails[0].value}</h1></div>
          <div className='other-details'>
            <h4>{personalDetails[1].value}</h4>
            <h4>{personalDetails[2].value}</h4>
            <h4>{personalDetails[3].value}</h4>
          </div>
        </div>
        <div className='cv-education-head'><h2>Education</h2></div>
        <div className='cv-education-body'>
          <p><strong>{educationDetails[0].value}</strong><br/>{educationDetails[1].value}</p>
          <h4>{date1.getFullYear()}-{date2.getFullYear()}</h4>
        </div>
        <div className='cv-professional-ex-head'><h2>Professional Experience</h2></div>
      </div>
     </div>
    </>
  )
}

export default App
