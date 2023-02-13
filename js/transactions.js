document.getElementById('transaction_btn').addEventListener('click',(e)=>{
    const tableArea = document.getElementById('table_area');
    tableArea.removeAttribute('hidden');
    tableArea.setAttribute('block',true);
 
})