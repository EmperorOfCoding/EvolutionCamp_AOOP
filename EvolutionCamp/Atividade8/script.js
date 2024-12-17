let sales = [1200, 950, 1000, 1050, 980, 890, 1150];

let sorted = sales.sort((a, b) => b - a);
alert(sorted);

let filtered = sales.filter((num) => num >= 1000);
alert(filtered);

let adjusted = sales.map((num) => num * 0.9);
alert(adjusted);

let totalsum = sales.reduce((acumulador, atual) => acumulador + atual);
alert(totalsum);

let formatted = adjusted.map((num) => `R$ ${num.toFixed(2).replace(".", ",")}`);
alert(formatted);