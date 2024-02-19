const x = {};
const y = {};

console.log(x);
console.log(y);

console.log(x.toString());

console.log(x.__proto__ === y.__proto__);

const array = [];

console.log(array);
// [] => array => object

function CoffeeMachine(beans) {
  this.beans = beans;
  // 만들어지는 함수마다 생성되는 함수
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log("making...");
  // };
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

latteMachine.makeCoffee();
