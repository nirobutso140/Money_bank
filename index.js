// ############## login btn ###########
var myLogin = document.getElementById('login')
myLogin.addEventListener('click', function(){
   var maindiv = document.getElementById('disNone')
   maindiv.style.display = 'none'
   var transectionOuter = document.getElementById('transectionBody')
   transectionOuter.style.display = 'block'
})

//################ diposit btn ################
var depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener('click', function(){
  var depositAmount = document.getElementById('depositAmount').value
  var depositNum = parseFloat(depositAmount)
  
  var currentDeposit = document.getElementById('currentDeposit').innerText
  var currentNum = parseFloat(currentDeposit)
 
  var totalAmount = depositNum + currentNum
  document.getElementById('currentDeposit').innerText = totalAmount

  //############# update balance #############

  var currentBalance = document.getElementById('currentBalence').innerText
  var currentBalanceNum = parseFloat(currentBalance)
  var totalBalance = depositNum + currentBalanceNum
  document.getElementById('currentBalence').innerText = totalBalance

  document.getElementById('depositAmount').value = '';
})

// ################# withdrow btn ###############
var withdrowBtn = document.getElementById('addWithdrow')
withdrowBtn.addEventListener('click',function(){
  
  var withdrowAmount = document.getElementById('withdrowAmount').value
  var withdrowNum = parseFloat(withdrowAmount)

  var currentWithdrow = document.getElementById('currentWithdrow').innerText
  var currentWithNum = parseFloat(currentWithdrow)

  var totalWithdrow = withdrowNum + currentWithNum

  document.getElementById('currentWithdrow').innerText = totalWithdrow

  //############ update balance ###############

  var currentBalance = document.getElementById('currentBalence').innerText
  var currentBalanceNum = parseFloat(currentBalance)
  var totalBalance = currentBalanceNum - withdrowNum 
  document.getElementById('currentBalence').innerText = totalBalance
  
  document.getElementById('withdrowAmount').value = ''

  

})
