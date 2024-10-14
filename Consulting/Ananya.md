:lock: **Value Capturing**  
```js
function func() {
    console.log("EXTERNAL SCRIPT RUNNING!!!!!!");
}
func();

// Access the input elements outside the event listener
var namElement = document.getElementById('name');
var lnamElement = document.getElementById('lname');
var datElement = document.getElementById('dateofbirth');
var adrsElement = document.getElementById('address');
var jsSkillElement = document.getElementById('range');
var paymentElement = document.getElementById('payment');
var teaElement = document.getElementById('beverages_tea');
var coffeeElement = document.getElementById('beverages_coffee');
var femaleElement = document.getElementById('gender_female');
var maleElement = document.getElementById('gender_male');

var el = document.getElementById("finish");
el.addEventListener("click", (event) => {
    console.log(event);
    event.preventDefault();

    // Retrieve the values inside the event listener
    var nam = namElement.value.trim();
    var lnam = lnamElement.value.trim();
    var dat = datElement.value.trim();
    var adrs = adrsElement.value.trim();
    var jsSkill = jsSkillElement.value;
    var payment = paymentElement.value;

    validateForm();

    var bev = [];
    if (teaElement && teaElement.checked) {
        bev.push('Tea');
    }
    if (coffeeElement && coffeeElement.checked) {
        bev.push('Coffee');
    }

    var gender = "";
    if (femaleElement && femaleElement.checked) {
        gender = "Female";
    } else if (maleElement && maleElement.checked) {
        gender = "Male";
    }

    // Clear the table
    // document.getElementById('tab').innerHTML = '';

    // Adding rows only if data is present
    if (nam) {
        addRow('First Name :', nam);
    }
    if (lnam) {
        addRow('Last Name :', lnam);
    }
    if (dat) {
        addRow('Date of Birth :', dat);
    }
    if (adrs) {
        addRow('Address :', adrs);
    }
    if (bev.length > 0) {
        addRow('Beverage :', bev.join(", "));
    }
    if (gender) {
        addRow('Gender :', gender);
    }
    if (jsSkill) {
        addRow('JS Skill Level :', jsSkill);
    }
    if (payment) {
        addRow('PaMode :', payment);
    }
});

function addRow(label, value) {
    var table = document.getElementById('tab');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = label;
    cell2.textContent = value;
}

function validateForm() {
    var firstName = document.getElementById("name").value.trim();
    var lastName = document.getElementById("lname").value.trim();
    var tea = document.getElementById('beverages_tea');
    var coffee = document.getElementById('beverages_coffee');
    var female = document.getElementById('gender_female');
    var male = document.getElementById('gender_male');
    var jsSkill = document.getElementById('range').value;

    // VALIDATIONS
    if (firstName === "") {
        alert("First Name is required");
        return false;
    }

    if (lastName === "") {
        alert("Last Name is required");
        return false;
    }

    // Validate that at least one beverage is selected
    if (!tea.checked && !coffee.checked) {
        alert("Please select at least one beverage");
        return false;
    }

    // Validate that a gender is selected
    if (!female.checked && !male.checked) {
        alert("Please select your gender");
        return false;
    }

    // Validate JavaScript skill rating
    if (jsSkill === "0") {
        alert("Please rate your JavaScript skill");
        return false;
    }

    return true;
}

var reset=document.querySelector(".reset");
reset.addEventListener("click",()=>
{
    document.querySelector("#tab").innerHTML=" ";
});

// Dynamically Capturing 
// var dfame=document.getElementById("name");
// dfame.addEventListener("change",()=>{
//     addRow('First Name :', dfame.value);
// })
```
