class Menu {
    constructor() {
        this.items = [
            { id: 1, name: "Hamburguer", price: 5.0 },
            { id: 2, name: "Pizza", price: 10.0 },
            { id: 3, name: "Sushi", price: 15.0 },
            { id: 4, name: "Salad", price: 7.0 },
            { id: 5, name: "Cake", price: 20.0 },
        ];
    }

    listItems() {

        return this.items
            .map(item => `${item.id} - ${item.name} (R$ ${item.price.toFixed(2)})`)
            .join("\n");
    }

    getItemByName(name) {
        return this.items.find(item => item.name.toLowerCase() === name.toLowerCase());
    }
}

class Order {
    constructor(menu) {
        this.menu = menu;
        this.items = [];
    }

    addItem(itemName, quantity) {

        const item = this.menu.getItemByName(itemName);

        if (!item) {

            alert(`Item "${itemName}" not found in the menu `)
            return;
        }

        else {


            let existingItem = this.items.find((i) => i.id === item.id);

            if (existingItem) {

                existingItem.quantity += quantity;

                alert(`${item.name} quantity updated to ${existingItem.quantity}`)
            }

            else {

                this.items.push({

                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: quantity,
                });


                alert(`${quantity} x ${item.name} added to cart`)
            }
        }
    }

    listItems() {
        if (this.items.length === 0) {
            return alert("The order is empty.");
        } else {
            return this.items
                .map(item =>
                    `- ${item.quantity} x ${item.name} (R$ ${item.price.toFixed(2)} each, total: R$ ${(item.price * item.quantity).toFixed(2)})`
                )
                .join("\n");
        }
    }

    removeItem(idItem) {
        this.items = this.items.filter(item => item.id !== idItem);
    }

    calculateTotallPayroll() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

class Receipt {
    constructor(order) {
        this.order = order;
        this.coupons = {
            "firstBuy": {
                "value": 0.20,
            },
        };
        this.payment_type = {
            "debit": {},
            "pix": {},
            "credits": {},
        };
    }

    validatePayment(payment) {
        if (this.payment_type[payment]) {
            return {
                status: true,
                message: "Payment method found",
            };
        } else {
            return {
                status: false,
                message: "Payment method not found",
            };
        }
    }

    validateCoupon(coupon) {
        if (this.coupons[coupon]) {
            return {
                status: true,
                message: "Coupon found",
            };
        } else {
            return {
                status: false,
                message: "Coupon not found",
            };
        }
    }

    switchPayment(payment) {
        switch (payment) {
            case "debit":
                return {
                    status: true,
                    message: "Payment method debit. Total: R$ " + this.order.calculateTotallPayroll().toFixed(2),
                };
            case "pix":
                return {
                    status: true,
                    message: "Payment method pix. Total: R$ " + this.order.calculateTotallPayroll().toFixed(2),
                };
            case "credits":
                return {
                    status: true,
                    message: "Payment method credits. Total: R$ " + this.order.calculateTotallPayroll().toFixed(2),
                };
            default:
                return {
                    status: false,
                    message: "Invalid payment method",
                };
        }
    }

    processPayment() {
        let payment = prompt(`Enter payment method (pix, debit, credits)`).toLowerCase();
        let paymentValidation = this.validatePayment(payment);

        if (paymentValidation.status) {
            let paymentResult = this.switchPayment(payment);
            alert(paymentResult.message);
        } else {
            alert(paymentValidation.message);
        }
    }
}

function main() {
    let menu = new Menu();
    let order = new Order();
    let receipt = new Receipt(order);

    let saida = false;

    while (saida == false) {
        let choice = parseInt(prompt(
            `Choose an option:
            1- List menu items
            2- Add new item to order
            3- Remove item from order
            4- Update item quantity
            5- List order
            6- Payment
            0- Sair`
        ));

        switch (choice) {
            case 1:
                alert(menu.listItems());
                break;
            case 2:
                alert(menu.listItems());
                let itemName = prompt("Item to add:");
                let itemAdd = menu.getItemByName(itemName);
                if (itemAdd) {
                    let quantityAdd = parseInt(prompt("Quantity to add:"));
                    order.addItem(itemAdd, quantityAdd);
                } else {
                    alert("Item not found.");
                }
                break;
            case 3:
                let itemNameRemove = prompt("Item to remove:");
                let itemRemove = menu.getItemByName(itemNameRemove);
                if (itemRemove) {
                    order.removeItem(itemRemove.id);
                    alert(`${itemNameRemove} removed.`);
                } else {
                    alert("Item not found.");
                }
                break;
            case 4:
                let itemNameUpdate = prompt("Item to update quantity:");
                let itemUpdate = menu.getItemByName(itemNameUpdate);
                if (itemUpdate) {
                    let newQuantity = parseInt(prompt("New quantity:"));
                    if (newQuantity > 0) {
                        order.addItem(itemUpdate, newQuantity - (order.items.find(i => i.id === itemUpdate.id)?.quantity || 0));
                        alert(`${itemNameUpdate} quantity updated.`);
                    } else {
                        alert("Invalid quantity.");
                    }
                } else {
                    alert("Item not found.");
                }
                break;
            case 5:
                alert(order.listItems);
                break;
            case 6:
                receipt.processPayment();
                break;
            case 0:
                alert("Thanks.");
                saida = true;
                break;
            default:
                alert("Invalid option. Please choose again.");
                break;
        }
    }
}

main();
