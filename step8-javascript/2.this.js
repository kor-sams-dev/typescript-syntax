console.log(this);

function simpleFunction() {
  console.log(this);
}

simpleFunction();

console.clear();

class Counter {
  counter = 0;
  increase = function () {
    console.log(this);
  };
  arrowIncrease = () => {
    console.log(this); // instance에서 bind를 할 필요가 없음.
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
caller();

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.arrowRun = counter.arrowIncrease;
bob.run();
bob.arrowRun();

const counterBind = new Bob();
counterBind.run = counter.increase.bind(counter);
counterBind.arrowIncrease = counter.arrowIncrease;
counterBind.run();
counterBind.arrowIncrease();

//=========================================================================
{
  function helloWorld() {
    console.log("Hello");
  }
  window.helloWorld(); // window에서 접근이 가능함.

  const ellie = "ellie";
  let bob = "bob";

  window.ellie; // undefined, window에서 접근이 불가능함
  window.bob; // undefined, window에서 접근이 불가능함

  var babVar = "bad";
  window.babVar; // bad, window에서 접근이 가능함
}
//=========================================================================
