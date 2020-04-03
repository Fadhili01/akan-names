function refreshForm() {
    document.getElementById("user_input").reset()
}

function akanNames() {
    var birthDay = document.getElementById("birthdate").value;
    var enteredDate = birthDay.split("-");
    var day = parseInt(enteredDate[2]);
    var month = parseInt(enteredDate[1]);
    var year = parseInt(enteredDate[0]);
    var century = (((year-1)/100)+1);
    var dayOfWeek = (((century/4)-2*century-1)+(5*(year/4))+(26*(month+1)/10)+day)%7;

    document.getElementById("output").innerHTML= Math.round(dayOfWeek);
    var maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var gender = document.getElementById("gender").value;
    var weekDays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayBorn = Math.round(dayOfWeek)

    
}