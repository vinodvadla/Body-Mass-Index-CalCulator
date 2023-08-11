let age = document.getElementById("age");
let weight = document.getElementById("weight");
let height = document.getElementById("Height");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");

function validateAge() {
    if (age.value == "") {
        age.style.border = "1px solid red";
        age.style.boxShadow = "4px 4px 0 red";
        label1.style.top = "22%";
        label1.style.color = "black";
        label1.style.fontSize = "15px";
    }
    else {
        label1.style.top = "15%";
        label1.style.color = "white";
        label1.style.fontSize = "20px"
        age.style.border = "1px solid green";
        age.style.boxShadow = "4px 4px 0 green"
    }
}
function validateWeight() {
    if (weight.value == "") {
        weight.style.border = "1px solid red";
        weight.style.boxShadow = "4px 4px 0 red";
        label2.style.top = "39%";
        label2.style.color = "black";
        label2.style.fontSize = "15px"
        label2.textContent="Weight in kg"
    }
    else {
        label2.textContent="Weight"
        label2.style.top = "32%";
        label2.style.color = "white";
        label2.style.fontSize = "20px"
        weight.style.border = "1px solid green";
        weight.style.boxShadow = "4px 4px 0 green"
    }
}
function validateHeight() {
    if (height.value !== "") {
        label3.textContent="Height"
        label3.style.top = "49%";
        label3.style.color = "white";
        label3.style.fontSize = "20px"
        height.style.border = "1px solid green";
        height.style.boxShadow = "4px 4px 0 green";
    }
    else if (height.value == "") {
        height.style.border = "1px solid red";
        height.style.boxShadow = "4px 4px 0 red";
        label3.style.top = "56%";
        label3.style.color = "black";
        label3.style.fontSize = "15px"
        label3.textContent="Height in cm"
    }
}

let validateBtn=()=>{
    if(age.value==""||height.value==""||weight.value==""){
        alert("Please Enter All The Values")
    }
    else{
    let h1=document.getElementById("h1");
    let h2=document.getElementById("h2");
    h2.innerHTML="Your Body Mass";
    let h=height.value/100;
    let w=weight.value
    let bodyMass=(w/(h*h))
    let ans=bodyMass.toFixed(2);
    h1.textContent=`${ans} m²`;
    }
   
}