$(document).ready(function() {
    $("#user_input").submit(function(event) {
        
        event.preventDefault();
        var gender =$("gender").val();
        var birthDay = $("birthdate").val();
        var enteredDate = birthDay.split("-");
        var day =parseInt(enteredDate[2]);
        var month =parseInt(enteredDate[1]);
        var year =parseInt(enteredDate[0]);
        var century = (year-1)/100+1;
        var dayOfWeek = (century/4 -2*century-1 + 5*year/4 + 26*(month+1)/10 + day)%7;
        
        $("output").innerHTML= Math.round(dayOfWeek);
        var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        var weekDays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dayBorn = Math.round(dayOfWeek)
        if(!isNaN(dayBorn)) {
            if(gender ==="Male") {
                $("output").innerHTML= "You were born on a "+weekDays[dayBorn]+"and your Akan name is "+maleNames[Math.round(dayOfWeek)];
            }
            else if(gender ==="Female") {
                $("output").innerHTML= "You were born on a "+weekDays[dayBorn]+"and your Akan name is "+femaleNames[Math.round(dayOfWeek)];
            }
            else {
                alert("Confirm that you have entered a valid birthday and selected your gender!");
                $("output").innerHTML= "Invalid!";
            };
        };
    });
    function refreshForm() {
        $("user_input").reset();
    };
    
    refreshForm();
});