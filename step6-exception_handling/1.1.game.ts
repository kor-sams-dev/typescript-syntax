/**
 * Let's make a game 🎮
 */

let position = { x: 0, y: 0 };
type Direction = "up" | "down" | "left" | "right" | "he";
type Move = (direction: Direction) => void;

const move: Move = (direction) => {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      // const invalid: never = direction; // 한가지 트릭: never 타입으로 he를 처리하지 않은 경우 빌드 타임에 에러를 발생시킬 수 있음.
      throw new Error(`unknown direction: ${direction}`);
  }
};

console.log(position); // { x: 0, y: 0 }
move("up");
console.log(position); // { x: 0, y: 1 }
move("down");
console.log(position); // { x: 0, y: 0 }
move("left");
console.log(position); // { x: -1, y: 0 }
move("right");
console.log(position); // { x: 0, y: 0 }
