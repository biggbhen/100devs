class UI{
 constructor(){
  this.display = document.querySelector('.display')
 }

 showImage(img){
 this.display.innerHTML = `
 <img src='${img.message}'/>
 `
 }
 
}