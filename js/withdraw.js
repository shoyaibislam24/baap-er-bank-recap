/*
1. add event handler with the withdraw button
 */

//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
  
    //step-2:
    const withdrawField =document.getElementById('withdraw-field');
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawtAmount = parseFloat(newWithdrawAmountString);

   //step-3:
   withdrawField.value = '';

//step-4:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//step-5:
const newWithdrawTotal = previousWithdrawTotal + newWithdrawtAmount;
withdrawTotalElement.innerText = newWithdrawTotal;

     //step-6:
     const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

      //step-7: 
   const newBalanceTotal = previousBalanceTotalAmount + newWithdrawtAmount;
   balanceTotalElement.innerText = newBalanceTotal;

})