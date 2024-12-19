
function CalculateTotalBill(amount, tip_percentage = 15) {

    let tip = amount * (tip_percentage / 100);
    let total_bill = amount + tip;
    alert(`The total bill is = ${total_bill}`);

}

CalculateTotalBill(500, 85);