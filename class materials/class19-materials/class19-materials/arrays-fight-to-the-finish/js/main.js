//Create an array of movie titles. Loop through the array and each element to the h2.
// let movies = ['gi joe', 'avatar', 'a quiet place']
// // let display = document.querySelector('h2')

// let header = ''
// movies.forEach(element => {
//  header += ' ' + element;  
// })

// document.querySelector('h2').innerHTML = header;



//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArr=[1,2,4,7,77,33,12,45];
let newArr = []
numArr.forEach(x => {
 let sum = 3;
 sum += x;
 newArr.push(sum)
});
// console.log(newArr);
// let newarr = numArr.sort((a, b)=> b - a)
// console.log(newarr);

//Find the average of all the numbers from question three
// let add = 0;
// newArr.forEach(x => {
//  add += x;
// })
// console.log(newArr.reduce((x, y) => x + y));
