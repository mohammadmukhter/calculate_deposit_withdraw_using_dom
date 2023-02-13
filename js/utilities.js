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
