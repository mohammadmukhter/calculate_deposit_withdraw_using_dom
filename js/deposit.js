// reusable function for inputFieldValueById 
function inputFieldValueById(InputFieldId){
    const inputFieldElement=document.getElementById(InputFieldId);
    const inputFieldValue = parseFloat(inputFieldElement.value);

    // clear the input field with null value
    inputFieldElement.value= '';

    return inputFieldValue;
}

// reusable function for Element value of Element innerText value by elementValueById function
function elementValueById(elementId){
    const previousElement= document.getElementById(elementId);
    const previousElementValue = parseFloat(previousElement.innerText);

    return previousElementValue;
}

// set the value to the cumulative element by setCumulativeValueById
function setCumulativeValueById(cumulativeElementId, updatedValue){
    const element = document.getElementById(cumulativeElementId);
    element.innerText = updatedValue;
}

const deposit_btn = document.getElementById('deposit_btn').addEventListener('click', (e)=>{
    
    // deposit field value
    const inputDepositFieldValue= inputFieldValueById('deposit_field');


    // validation for numbers value
    if(isNaN(inputDepositFieldValue) || inputDepositFieldValue < 0){
        alert('Please input Deposit Amount as a positive number value');
        return;
    }

    // previous value from Cumulative deposit amount 
    const previousCumulativeDepositValue= elementValueById('cumulative_deposit');

    // calculate updated Cumulative deposit amount
    const updatedCumulativeDeposit = previousCumulativeDepositValue + inputDepositFieldValue;

    // set the cumulative value to the deposit
    setCumulativeValueById('cumulative_deposit', updatedCumulativeDeposit );

    // value from Total Balance amount
    const previousTotalBalance = elementValueById('total_balance')

    // calculate updated Total Balance amount and update the total balance amount
    const updatedTotalBalance = previousTotalBalance + inputDepositFieldValue;
    // set the final balance
    setCumulativeValueById('total_balance', updatedTotalBalance);

});