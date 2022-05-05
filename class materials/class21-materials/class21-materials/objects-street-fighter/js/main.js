//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(strength, finishing, endurance, xp) {
  this.strength = strength;
  this.finishing = finishing;
  this.endurance = endurance;
  this.xp = xp;

  this.skill = function () {
    return `iron bow tackle + ${(this.xp /= 10)}xp`;
  };
}

const liuKang = new StreetFighter('160ibs', 'freeze block', 'moderate', 110);
console.log(liuKang);
