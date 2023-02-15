// Increase Product Number

function updateCaseNumber(isIncrease){
    const productField = document.getElementById('product-value');
    const productValue = productField.value;
    const productValueNumber = parseInt(productValue);

    let prevProductValue;

    if(isIncrease){
         prevProductValue = productValueNumber + 1;
    }
    else{
         prevProductValue = productValueNumber - 1;
    }

    // Now Updated Product Value;
    productField.value = prevProductValue;

    return prevProductValue;
}

// Function for Calculate Price;
function calculatePrice(productValueCase){
    const caseTotalPrice = productValueCase*200;
    const priceField = document.getElementById('price');
    priceField.innerText = caseTotalPrice;
}

document.getElementById('increase').addEventListener('click',function(){
  const productValueCase =   updateCaseNumber(true);
    calculatePrice(productValueCase);
})
document.getElementById('decrease').addEventListener('click',function(){
    const productValueCase =   updateCaseNumber(false);
    calculatePrice(productValueCase);
})