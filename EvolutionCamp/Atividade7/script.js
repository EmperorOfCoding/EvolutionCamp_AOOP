let scores = [85, 92, 88, 76, 95, 89, 73, 91];

//Encontrar um Score > 90
let score_higherthan90 = scores.some(scor => scor > 90);
alert(score_higherthan90);

//Verificar se todos os scores sao >= 70
let all_scores_70 = scores.every(scor => scor >= 70);
alert(all_scores_70);

//Encontrar o primeiro score < 70
let first_score_less_than_80 = scores.find(scor => scor < 80);
alert(first_score_less_than_80);

//Criar um novo array com os index de 2 a 5
let new_array = scores.slice(2, 6);
alert(new_array);

//Ache o index do score "95" dentro do array.
let score_position_scores = scores.findIndex(scor => scor === 95);
alert(`A posicao do score 95 é ${score_position_scores}`);




