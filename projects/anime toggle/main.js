document.querySelector('.asta').addEventListener('click' , asta);
document.querySelector('.erenYegger').addEventListener('click' , erenYegger);
document.querySelector('.shinra').addEventListener('click' , shinra);
document.querySelector('.deku').addEventListener('click' , deku);
document.querySelector('.tanjiro').addEventListener('click' , tanjiro);
document.querySelector('.Naruto').addEventListener('click' , Naruto);
document.querySelector('button').addEventListener('click' , button)


function asta(){
 let character=document.querySelector('.nameOfCharacter1')
 let anime= document.querySelector('.displayOne').style
anime.backgroundImage = 'url("images/black cloverGif.gif")'
anime.backgroundRepeat='no-repeat'
anime.backgroundPosition= 'center'
anime.backgroundSize='cover'
character.style.color='red'
character.innerText='asta'

 }
 


function erenYegger(){
  let character=document.querySelector('.nameOfCharacter1')
let anime= document.querySelector('.displayOne').style
anime.backgroundImage='url("images/eren-titan-attack-on-titanGif.gif")'
anime.backgroundPosition='center'
anime.backgroundSize='cover'
character.style.color='orange'
character.innerText='erenYegger'
}


function shinra(){
   let character=document.querySelector('.nameOfCharacter1')
let anime= document.querySelector('.displayOne').style
anime.backgroundImage='url("images/shinraFireForceGif.gif")'
anime.backgroundPosition='center'
anime.backgroundSize='cover'
character.style.color='white'
character.innerText='Shinra'
}

function deku(){
 let character=document.querySelector('.nameOfCharacter2')
let anime= document.querySelector('.displayTwo').style
anime.backgroundImage='url("images/my-hero-academia-icegif.gif")'
anime.backgroundPosition='center'
anime.backgroundSize='cover'
character.style.color='white'
character.innerText='Deku'
}

function tanjiro(){
 let character=document.querySelector('.nameOfCharacter2')
let anime= document.querySelector('.displayTwo').style
anime.backgroundImage='url("images/demon-slayer-gif.gif")'
anime.backgroundPosition='center'
anime.backgroundSize='cover'
character.style.color='red'
character.innerText='tanjiro'
}


function Naruto(){
 let character=document.querySelector('.nameOfCharacter2')
let anime= document.querySelector('.displayTwo').style
anime.backgroundImage='url("images/narutoGif.gif")'
anime.backgroundPosition='center'
anime.backgroundSize='cover'
character.style.color='orange'
character.innerText='Naruto'
}

function button(){
 let fight= document.querySelector('.vsFight')
 let fire=  document.querySelector('body').style
 fire.backgroundImage='url("images/bXdxUz.gif")'
fire.backgroundPosition='center'
fire.backgroundSize='cover'

fight.innerText='Fight'

}
