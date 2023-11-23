import './assets/styles/style.css'
import PersonalInfo from './components/personal_info.jsx'
import EducationInfo from './components/Education_info.jsx'
import ProfessionalEx from './components/professionalEx.jsx'
import { useState } from 'react'
import './assets/styles/cv_style.css'
import "react-datepicker/dist/react-datepicker.css";
import './assets/styles/input_cv_styles.css'


function App() {
// declaring variables for personal details
  const [personalDetails, setPersonalDetails] = useState([
    {value: 'Subhranshu Sekhar Khilar', id: 1},
    {value: '+91 7749848533', id: 2},
    {value: 'subhranshuKhilar@outlook.com', id: 3},
    {value: 'odisha, India', id: 4}
  ])

  // decalring variables for Educational details

  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [educationDetails, setEducationDetails] = useState([
    {value: 'Enter college', id:1},
    {value: 'Btech', id:2}
  ])
  
// declaring variables for professional experience details
const [datePro1, setDatePro1] = useState(new Date());
const [datePro2, setDatePro2] = useState(new Date());
const [professionalDetails, setProfessionalDetails] = useState([
  {value: 'Enter company name', id:1},
  {value: 'frontend engineer', id:2}
])


  return (
    <>
     <div className='cv-body'>
      <div className="fill-contents"> 
          <div className="info-div">
              <h1>RESUME BUILDER</h1>
              <p>Made by:<br/><strong>Subhranshu Sekhar Khilar</strong></p>

          </div>
          <div className="cv-input-div">
            <PersonalInfo personalDetails = {personalDetails} setPersonalDetails = {setPersonalDetails}/>
            <EducationInfo educationDetails = {educationDetails} setEducationDetails = {setEducationDetails}
             date1={date1} setDate1 = {setDate1} date2={date2} setDate2 = {setDate2}  />
             <ProfessionalEx datePro1 = {datePro1} setDatePro1 = {setDatePro1} datePro2 = {datePro2} setDatePro2 = {setDatePro2}
              professionalDetails = {professionalDetails} setProfessionalDetails = {setProfessionalDetails}/>
            
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
        <div className='cv-professional-ex-body'>
         <div><h4>{professionalDetails[0].value}</h4><h4>{datePro1.getFullYear()}-{datePro2.getFullYear()}</h4></div>
          <p>{professionalDetails[1].value}</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
