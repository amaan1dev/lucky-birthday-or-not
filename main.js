const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");

const checkButton = document.querySelector("#check-button");

const outputPara = document.querySelector("#output-para");

function compareInputs(sum, luckyNumber)
{
    if (sum % luckyNumber === 0){
    outputPara.innerText = "hurray your birthday is lucky 🚀";
} else{
    outputPara.innerText = "your birthday is not so lucky 🤔" ;
}
    
} 

function checkBirthdateIsLucky(){
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareInputs(sum,luckyNumber.value);
    else{
        outputPara.innerText = "kindly enter both the details 🕵️‍♂️"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}
 


checkButton.addEventListener('click', checkBirthdateIsLucky);
    