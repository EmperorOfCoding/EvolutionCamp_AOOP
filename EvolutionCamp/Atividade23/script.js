
function calculateDiscount(purchaseAmount, coupon) {

    let total_bill = 0;

    if (purchaseAmount >= 500 && coupon === "MEGA") {

        let total_bill = purchaseAmount * 0.80;
        alert("A coupon of 20% has been applied")
        return alert(`Final bill: R$${total_bill}`)


    }

    else if (purchaseAmount >= 300 && coupon === "SUPER") {

        total_bill = purchaseAmount * 0.85;
        alert("A coupon of 15% has been applied")
        return alert(`Final bill: R$${total_bill}`)
    }

    else if (purchaseAmount >= 100 && coupon === "BASIC") {

        total_bill = purchaseAmount * 0.90;
        alert("A coupon of 10% has been applied")
        return alert(`Final bill: R$${total_bill}`)

    }


    else {

        alert("Coupon Invalid!")
        alert("No discount has been applied!")
        return alert(`Final bill: R$${purchaseAmount}`);
    }

}

calculateDiscount(600, "SUPER");