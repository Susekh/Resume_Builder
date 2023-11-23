/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";

function EducationInfo(props){
    const educationDetails = props.educationDetails;
    const setEducationDetails = props.setEducationDetails;
    const date1 = props.date1;
    const setDate1 =  props.setDate1;
    
    const date2 = props.date2;
    const setDate2 =  props.setDate2;


    const change = index => event => {
        const newArry = [...educationDetails];
        newArry[index].value = event.target.value 

        setEducationDetails(newArry);
    }

   
    return (
        <>
            <div className="input_divs">
                <h1>Educational Details</h1>
                <form>
                        <label htmlFor="c-name" >College Name : </label><br/>
                        <input id="c-name" onChange={change(0)} value={educationDetails[0].value}></input><br></br>
                        <label htmlFor="prof-degree" >Degree you are pursuing :</label><br/>
                        <input id="prof-degree" onChange={change(1)} value={educationDetails[1].value}></input><br></br>
                        <label htmlFor="s-date" >Starting date : </label><br/>
                        <DatePicker id="s-date" selected={date1} onChange={(date) => setDate1(date)} /><br/>
                        <label htmlFor="e-date" >Ending date : </label><br/>
                        <DatePicker id="e-date" selected={date2} onChange={(date) => setDate2(date)} />
                </form>
            </div>
        </>
    );
}

export default EducationInfo;