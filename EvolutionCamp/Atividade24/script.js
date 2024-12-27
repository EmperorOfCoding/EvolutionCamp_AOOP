//System cart
// User should add items to the cart
// User should remove items from the cart
// Update item quantities
// Calculate the total price of itens in the cart
// Search for an item by name


cart = [//Meu carrinho
    { name: "Livro", price: 45, quantity: 2 },
    { name: "Brinquedo", price: 20, quantity: 5 },
    { name: "Teclado", price: 160.50, quantity: 1 }
]


function addItemToCart(cart, name, price, quantity) {

    //Cria objeto novo_item
    let new_item = {

        name: name,
        price: price,
        quantity: quantity

    };

    //Puxar o meu novo item para o meu carrinho já existente
    cart.push(new_item);
    alert("Item adicionado com sucesso!!!")
    return console.log(cart);
}

function removeItemFromCart(cart, name) {

    //Criar um novo carrinho onde os nomes nao correspondem ao parametro
    let updatedCart = cart.filter((item) => item.name !== name);

    //Limpar carrinho antigo
    cart.length = 0;
    //Colocar carrinho atualizado no meu carrinho
    cart.push(...updatedCart);
    alert("Carro atualizado")
    return console.log(cart)



}

function updateItemQuantity(cart, name, newQuantity) {

    return cart.map((item) => { //Cria um array com os itens com base no nome e retorna um novo objeto com a copia desse item e a nova quantidade

        if (item.name === name) {

            return console.log({ ...item, quantity: newQuantity })

        }

        else {

            return console.log(item)
        }

    });

}

function calculateTotal(cart) {

    //Pega cada preco, multiplica pela quantidade de todos os itens do carrinho e depois soma
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`O valor total do carrinho é: ${total.toFixed(2)}`)
}


function findItemByName(cart, name) {

    //Achar item específico com o nome específico
    let item = cart.find((item) => item.name === name);

    return console.log(item || `Item com nome ${name} nao encontrado`);

}



removeItemFromCart(cart, "Teclado");