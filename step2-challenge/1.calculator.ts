/**
 * Let's make a calculator 🧮
 */

type Commands = "add" | "substract" | "multiply" | "divide" | "remainder";

type Calculator = (commaned: Commands, x: number, y: number) => number;

const calculator: Calculator = (commaned, x, y): number => {
  switch (commaned) {
    case "add":
      return x + y;
    case "substract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    case "remainder":
      return x % y;
    default:
      throw new Error("unknown command");
  }
};

console.log(calculator("add", 1, 3)); // 4
console.log(calculator("substract", 3, 1)); // 2
console.log(calculator("multiply", 4, 2)); // 8
console.log(calculator("divide", 4, 2)); // 2
console.log(calculator("remainder", 5, 2)); // 1
