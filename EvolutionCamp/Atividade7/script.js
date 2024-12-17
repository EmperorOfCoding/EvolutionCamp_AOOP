let scores = [85, 92, 88, 76, 95, 89, 73, 91];

//Score (One) > 90
let score_higherthan90 = scores.some(scor => scor > 90);
alert(score_higherthan90);

//Scores (All) > 70
let all_scores_70 = scores.every(scor => scor >= 70);
alert(all_scores_70);

//First score less than 80
let first_score_less_than_80 = scores.find(scor => scor < 80);
alert(first_score_less_than_80);

//New Array with scores index 2 to 5
let new_array = scores.slice(2, 6);
alert(new_array);

//Find position of score 95 in the array (scores)
let score_position = scores.findIndex(scor => scor === 95);
alert(`A posicao do score 95 é ${score_position}`);




