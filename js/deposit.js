
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

    // create a tr element for table body
    const tBody = document.getElementById('t_body');
        let i = 1 + tBody.children.length;

        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${i}</th>
        <td>$${inputDepositFieldValue}</td>
        <td><span class="text-green-600">Deposited</span></td>
        <td>${new Date().toLocaleString()}</td>
        `;
        tBody.appendChild(tr);

});