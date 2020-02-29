const loginBtn = document.getElementById("loginBtn");

// Login btn event handler
loginBtn.addEventListener("click", ()=>{
    
    const loginArea = document.getElementById("login-area");
    const transactionArea = document.getElementById("transaction-area");

    loginArea.style.display = "none";
    transactionArea.style.display = "block";

    
})

//add deposit btn event handler.

const addDepositBtn = document.getElementById("addDepositBtn");

function getInput(id){
    const element = document.getElementById(id);
    const amount = parseFloat(element.value);
    return amount;
}

function updateSpanText(id, amount){
    const element = document.getElementById(id);

    const elementValue = parseFloat(element.innerText);

    var total = 0;
    
    if(amount > 0 || (amount < 0 && elementValue > 0)){
        total = elementValue + amount;
    }

    element.innerText = total;

}

addDepositBtn.addEventListener("click", ()=>{
    
    const depositAmount = getInput("deposit-amount");

    updateSpanText("current-deposit", depositAmount);
    updateSpanText("current-balance", depositAmount);

    document.getElementById("deposit-amount").value = "";
})



// withdraw money btn event handler.

const withdrawMoneyBtn = document.getElementById("withdrawMoneyBtn");

withdrawMoneyBtn.addEventListener("click", ()=>{
    const withdrawAmount = getInput("withdraw-amount");

    updateSpanText("current-withdraw", withdrawAmount);
    updateSpanText("current-balance", -1 * withdrawAmount);

    document.getElementById("withdraw-amount").value = "";
})


