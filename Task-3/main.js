var outputCard = document.querySelector(".outputCard");
var userEmail = document.getElementById("umail");
var userPassword = document.getElementById("upass");
var firstName = document.getElementById("ufirstname");
var lastName = document.getElementById("ulastname");
var fullName = firstName + lastName;
var male = document.getElementById("male");
var female = document.getElementById("female");
// var India = document.getElementById("India");
// var Japan = document.getElementById("Japan");
// var USA= document.getElementById("USA");
// var China = document.getElementById("China");
// var Australia = document.getElementById("Australia");
// var Dubai = document.getElementById("Dubai");
var weblink = document.getElementById("weblink");
var skill = document.getElementById("skill");
var form = document.querySelector("form");
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
    // if(!fullName.value || !userEmail.value || !userPassword.value) {
    //     alert("Please enter all fields !");
    // }
    // else {
        outputCard.innerHTML += `
        <div class="card">
        <div class="card-body">
        <ul style="list-style-type:none">
        <li><h4 class="title"><b>Name:</b> ${firstName.value} ${lastName.value}</h4></li>
        <li><p class="text"><b>Gender:</b> ${male.checked ? male.value : female.checked ? female.value : "Others"}</p></li>
        <li><p class="text"><b>E-mail:</b> ${userEmail.value}</p></li>
        <li><p class="text"><b>Website:</b> ${weblink.value}</p></li>
        <li><p class="text"><b>Skills:</b> ${skill.value}</p></li>
        </ul>
        </div>
        </div>`

        alert("Student Enrolled Successfully")
        form.reset()
    // }
})