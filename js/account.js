// for deposit
document.getElementById('debositSubmit').addEventListener('click', function(){
    const depositeField = document.getElementById('deposit-value');
    const newDepositeValue = parseFloat(depositeField.value);

    if(newDepositeValue>=0){
    const totalDeposit = document.getElementById('addDeposit');
    const previousDepositValue =parseFloat(totalDeposit.innerText);
    const addDepositAmount = newDepositeValue + previousDepositValue;
    totalDeposit.innerText= addDepositAmount;
    //clean deposit value box
    depositeField.value='';

    // add balance ammount

    const balanceAdd = document.getElementById('addBalance');
    const previouseBalance = parseFloat(balanceAdd.innerText);
    const totalBalance = newDepositeValue + previouseBalance;
    balanceAdd.innerText = totalBalance;
    }
    else{
        alert('Enter Positive Number')
    }

})

// for withdraw
document.getElementById('withdrawSubmit').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-value');
    const newWithdrawValue = parseFloat(withdrawField.value);
    const balanceAdd = document.getElementById('addBalance');
    const previouseBalance = parseFloat(balanceAdd.innerText);

    if(newWithdrawValue>=0 && previouseBalance>=newWithdrawValue ){
    const totalWithdraw = document.getElementById('subDeposit');
    const previousWithdrawValue =parseFloat(totalWithdraw.innerText);
    const addWithdrawAmount = newWithdrawValue + previousWithdrawValue;
    totalWithdraw.innerText= addWithdrawAmount;
    //clean deposit value box
    withdrawField.value='';

    // sub balance ammount

    /* balanceAdd = document.getElementById('addBalance');
    previouseBalance = parseFloat(balanceAdd.innerText); */
    const totalBalance =  previouseBalance - newWithdrawValue;
    balanceAdd.innerText = totalBalance; 
    }else{
        alert('You have not enough money!')
    }


})