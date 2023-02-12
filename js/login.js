const login_btn = document.getElementById('login_btn').addEventListener('click',(e)=>{
    const user_email = document.getElementById('user_email').value;
    const user_password = document.getElementById('user_password').value;
    
    if(user_email === 'email@email.com' && user_password === '0000'){
        window.location.href ='balance_counter.html';
    }else{
        alert('Please Enter Correct Email or Password');
    }
    
})