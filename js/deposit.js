const deposit_btn = document.getElementById('deposit_btn').addEventListener('click', (e)=>{
    
    // deposit field value
    const inputDepositElement=document.getElementById('deposit_field');
    const inputDeposit = parseFloat(inputDepositElement.value);

    // clear the input field with null value
    inputDepositElement.value= '';

    // validation for numbers value
    if(isNaN(inputDeposit) || inputDeposit < 0){
        alert('Please input Deposit Amount as a positive number value');
        return;
    }

    // value from Cumulative deposit amount 
    const cumulativeDepositElement= document.getElementById('cumulative_deposit');
    const cumulativeDeposit = parseFloat(cumulativeDepositElement.innerText);

    // calculate updated Cumulative deposit amount and update the cumulative deposit amount
    const updatedCumulativeDeposit = cumulativeDeposit + inputDeposit;
    cumulativeDepositElement.innerText = updatedCumulativeDeposit;

    // value from Total Balance amount
    const previousTotalBalanceElement = document.getElementById('total_balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceElement.innerText);

    // calculate updated Total Balance amount and update the total balance amount
    const updatedTotalBalance = previousTotalBalance + inputDeposit;
    previousTotalBalanceElement.innerText = updatedTotalBalance;

});