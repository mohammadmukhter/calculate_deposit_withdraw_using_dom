const withdraw_btn = document.getElementById('withdraw_btn').addEventListener('click', (e)=>{
    
    // deposit field value
    const inputWithdrawElement=document.getElementById('withdraw_field');
    const inputWithdraw = parseFloat(inputWithdrawElement.value);

    // clear the input field with null value
    inputWithdrawElement.value= '';

    // validation for numbers value
    if(isNaN(inputWithdraw) || inputWithdraw < 0){
        alert('Please input Withdraw Amount as a positive number value');
        return;
    }
    
    console.log(inputWithdraw);
    // // value from Cumulative deposit amount 
    // const cumulativeDepositElement= document.getElementById('cumulative_deposit');
    // const cumulativeDeposit = parseFloat(cumulativeDepositElement.innerText);

    // // calculate updated Cumulative deposit amount and update the cumulative deposit amount
    // const updatedCumulativeDeposit = cumulativeDeposit + inputDeposit;
    // cumulativeDepositElement.innerText = updatedCumulativeDeposit;

    // // value from Total Balance amount
    // const previousTotalBalanceElement = document.getElementById('total_balance');
    // const previousTotalBalance = parseFloat(previousTotalBalanceElement.innerText);

    // // calculate updated Total Balance amount and update the total balance amount
    // const updatedTotalBalance = previousTotalBalance + inputDeposit;
    // previousTotalBalanceElement.innerText = updatedTotalBalance;

});