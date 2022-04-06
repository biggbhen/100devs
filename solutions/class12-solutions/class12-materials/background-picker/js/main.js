document.getElementById('demonSlayer').onclick = partyPurple
document.getElementById('aot').onclick = partyGreen
document.getElementById('mha').onclick = partyRed


function partyPurple() {
  document.querySelector('body').style.backgroundImage = 'url("./img/demon slayer.gif")'
  document.querySelector('body').style.color = 'red'
 document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
}

function partyGreen() {
  document.querySelector('body').style.backgroundImage='url("./img/eren-titan-attack-on-titan.gif")';
  document.querySelector('body').style.color = 'white';
  document.querySelector('body').style.backgroundRepeat= "no-repeat";
  document.querySelector('body').style.backgroundSize = "cover";
}

function partyRed() {
 document.querySelector('body').style.backgroundImage='url("./img/my-hero-academia-icegif-2.gif")';
 document.querySelector('body').style.color="blue"
 document.querySelector('body').style.backgroundRepeat= "no-repeat";
  document.querySelector('body').style.backgroundSize = "cover";
}
