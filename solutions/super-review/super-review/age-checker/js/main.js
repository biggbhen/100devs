//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

const age = Number(document.querySelector('input').value);
const h1 = document.querySelector('h1');
const display = document.querySelector('p');

h1.addEventListener('click', check)
function check(){
if(age < 16){
display.innerText ='you can\'t drive'
}else{
 display.innerText ='you can drive'
}
}
console.log(age)



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
