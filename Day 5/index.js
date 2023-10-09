function submit(e){
    e.preventDefault();

    let name = document.getElementById("fname").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobileId = document.getElementById("mobileId").value.trim();
    let countryId = document.getElementById("countryId").value.trim();
    let genderId = document.getElementsByName("gender");
    let gender="";

    for(let i=0; i<genderId.length; i++){
        if (genderId[i].checked === true){
            gender = genderId[i].value;
        }
    }
    
    const atindex = email.indexOf("@");
    const dotIndex = email.indexOf(".");
    var phone = /^\d{10}$/;
        
    if(name==="" || email==="" || mobileId==="" ){
        console.log("Error");
    }

    if(atindex <= 0 || dotIndex <= 0 || dotIndex >= email.length -1 || gender ==="" ){
        console.log("Error");
    }

    if(!phone.test(mobileId)){
        //mobileId.length !=10
        console.log("Error");
    }

    if(countryId){
        countryId === "select"
        console.log("Error");
    }
    else{
        console.log("Name --->"+name);
        console.log("Email --->"+email);
        console.log("Phno. --->"+mobileId);
        console.log("Country --->"+countryId);
        console.log("Gender --->"+gender);
    }

    alert( `Name--->${name}
            Email--->${email}
            Phno.--->${mobileId}
            Country--->${countryId}
            Gender--->${gender}`
        );       
    
}
document.getElementById("submit").addEventListener("click",  submit);