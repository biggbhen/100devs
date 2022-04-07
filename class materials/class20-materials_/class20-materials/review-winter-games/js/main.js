//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let numbarr=[12,10,44,31,37]
let newArr=[];
// console.log(newArr);
function even() {
 for (let i = 0; i < numbarr.length; i++) {
  const element = numbarr[i];

if(element % 2 == 0){
 newArr.push(element)
} 
 }
 console.log(newArr);
}
even()
