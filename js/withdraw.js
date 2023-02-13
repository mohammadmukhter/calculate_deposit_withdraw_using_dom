const withdraw_btn = document.getElementById('withdraw_btn').addEventListener('click', (e)=>{
    
    // withdraw field value
    const inputWithdrawFieldValue= inputFieldValueById('withdraw_field');

    // validation for numbers value
    if(isNaN(inputWithdrawFieldValue) || inputWithdrawFieldValue < 0){
        alert('Please input Withdraw Amount as a positive number value');
        return;
    }


    // previous value from Cumulative deposit amount 
    const previousCumulativeWithdrawValue= elementValueById('cumulative_withdraw');

    
    // value from Total Balance amount
    const previousTotalBalance = elementValueById('total_balance');

    // validation if balance is less then withdraw
    if(previousTotalBalance < inputWithdrawFieldValue){
        alert('Insufficient balance for withdraw! Please Enter withdraw amount less then available balance');
        return;
    }


    // calculate updated Total Balance amount and update the total balance amount
    const updatedTotalBalance = previousTotalBalance - inputWithdrawFieldValue;

    // set the final balance
    setCumulativeValueById('total_balance', updatedTotalBalance);

    // calculate updated Cumulative withdraw amount and update the cumulative withdraw amount
    const updatedCumulativeWithdraw = previousCumulativeWithdrawValue + inputWithdrawFieldValue;

    // set the cumulative withdraw element
    setCumulativeValueById('cumulative_withdraw', updatedCumulativeWithdraw);

    // create a tr element for table body
    const tBody = document.getElementById('t_body');
        let i = 1 + tBody.children.length;

        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${i}</th>
        <td>$${inputWithdrawFieldValue}</td>
        <td><span class="text-red-600">Withdraw</span></td>
        <td>${new Date().toLocaleString()}</td>
        `;
        tBody.appendChild(tr);


});