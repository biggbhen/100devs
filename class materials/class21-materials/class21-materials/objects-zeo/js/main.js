//Create a stopwatch object that has four properties and three methods
function Stopwatch(color, weight, brand, time) {
  this.color = color;
  this.weight = weight;
  this.brand = brand;
  this.time = new Date(time);
}
Stopwatch.prototype.alarm = function () {
  return `wake up! it's ${this.time}, your birthday`;
};

const casio = new Stopwatch('red', '1.3kg', 'casio', '12-02-1997');
console.log(casio.alarm());
