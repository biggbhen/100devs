//Write your pseduo code first! 
// get the value to be converted on click
// create a formula to convert your value
// display your result

document.querySelector('.convOne').addEventListener('click',convOne);
function convOne(){
 let fahValue= document.querySelector('#cel').value;
fahValue=(fahValue - 32) *  5/9;
let f= fahValue.toFixed(2)
let cel='&deg;C';
document.querySelector('.placeToSeeOne').style.color='white';
document.querySelector('.placeToSeeOne').innerHTML=`${f} ${cel}`;
}

document.querySelector('.convTwo').addEventListener('click',convTwo);
function convTwo(){
 let celValue= document.querySelector('#fah').value;
celValue=(celValue * 1.8) + 32;
let c=celValue.toFixed(2)
let fah='&deg;F';
document.querySelector('.placeToSeeTwo').innerHTML=`${c} ${fah}`;
document.querySelector('.placeToSeeTwo').style.color='white'
}