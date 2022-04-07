// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let numArr = [100,23,33,56,101];

// console.log(numArr[numArr.length - 1]);
function compare(){
numArr.forEach(x=>{
 if(numArr[0] < numArr[numArr.length - 1]){
console.log('hi');
 }else if(numArr[0] > numArr[numArr.length - 1]){
  console.log('bye');
 }else if(numArr[0] = numArr[numArr.length - 1]){
console.log('we close in hour');
 }
 
})

}
compare();