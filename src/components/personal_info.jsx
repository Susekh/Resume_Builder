/* eslint-disable react/prop-types */
function PersonalInfo(props){
    const personalDetails = props.personalDetails;
    const setPersonalDetails = props.setPersonalDetails;

    const change = index => event => {
        const newArry = [...personalDetails];
        newArry[index].value = event.target.value 

        setPersonalDetails(newArry);
    }

    return (
        <>
            <div>
                <h1>Personal Details</h1>
                <form>
                        <label htmlFor="f-Name" >Full Name : </label>
                        <input id="f-Name" onChange={change(0)} value={personalDetails[0].value}></input><br></br>
                        <label htmlFor="phone-num" >Phone Number :</label>
                        <input id="phone-num" onChange={change(1)} value={personalDetails[1].value}></input><br></br>
                        <label htmlFor="email-id" >Email Id : </label>
                        <input id="email-id" onChange={change(2)} value={personalDetails[2].value}></input><br></br>
                        <label htmlFor="address" >Address : </label>
                        <input id="address" onChange={change(3)} value={personalDetails[3].value}></input><br></br>
                </form>
            </div>
        </>
    );
}


export default PersonalInfo;