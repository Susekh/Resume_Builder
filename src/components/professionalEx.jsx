/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";

export default function ProfessionalEx(props){
    const professionalDetails = props.professionalDetails;
    const setProfessionalDetails = props.setProfessionalDetails;
    const datePro1 = props.datePro1;
    const setDatePro1 = props.setDatePro1;
    const datePro2 = props.datePro2;
    const setDatePro2 = props.setDatePro2;


    const change = index => event => {
        const newArry = [...professionalDetails];
        newArry[index].value = event.target.value 

        setProfessionalDetails(newArry);
    }
    return (
        <>
            <div className="input_divs">
                <h1>Professional Details</h1>
                <form>
                        <label htmlFor="pro-name" >Company Name : </label><br/>
                        <input id="pro-name" onChange={change(0)} value={professionalDetails[0].value}></input><br></br>
                        <label htmlFor="pro-date" >Starting date : </label><br/>
                        <DatePicker id="pro-date" selected={datePro1} onChange={(date) => setDatePro1(date)} /><br/>
                        
                        <label htmlFor="pro-date" >Ending date : </label><br/>
                        <DatePicker id="pro-date" selected={datePro2} onChange={(date) => setDatePro2(date)} /><br/>
                        <label htmlFor="pro-para" >Enter your experience in the company :</label><br/>
                        <textarea id="pro-para" onChange={change(1)} value={professionalDetails[1].value}></textarea><br></br>
                </form>
            </div>
        </>
    );
}