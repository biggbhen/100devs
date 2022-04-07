let dog = new Dog();
let ui = new UI()

const button = document.querySelector('#click')

button.addEventListener('click', () =>{
 dog.get('https://dog.ceo/api/breeds/image/random')
 .then(data => {
console.log(data);
ui.showImage(data)
 })
 .catch(err => console.log(err))
})




