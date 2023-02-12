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

    // value from Cumulative Withdraw amount 
    const cumulativeWithdrawElement= document.getElementById('cumulative_withdraw');
    const cumulativeWithdraw = parseFloat(cumulativeWithdrawElement.innerText);

    
    // value from Total Balance amount
    const previousTotalBalanceElement = document.getElementById('total_balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceElement.innerText);

    // validation if balance is less then withdraw
    if(previousTotalBalance < inputWithdraw){
        alert('Insufficient balance for withdraw! Please Enter withdraw amount less then available balance');
        return;
    }


    // calculate updated Total Balance amount and update the total balance amount
    const updatedTotalBalance = previousTotalBalance - inputWithdraw;
    previousTotalBalanceElement.innerText = updatedTotalBalance;

    // calculate updated Cumulative withdraw amount and update the cumulative withdraw amount
    const updatedCumulativeWithdraw = cumulativeWithdraw + inputWithdraw;
    cumulativeWithdrawElement.innerText = updatedCumulativeWithdraw;

});