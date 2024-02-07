{
  /**
   * Type Inference
   */
  let text = "hello";
  text = "hi";
  // text = 1 // error

  // function print(messgaeg) { // any 타입으로 추론
  // function print(messgaeg: string ) { // string 타입으로 명시
  function print(messgaeg = "") {
    // sting 타입으로 추론
    console.log(messgaeg);
  }

  print("hello");

  // function add(x: number, y: number) { // return 타입을 number로 추론하지만 명시하는 것이 좋다.
  function add(x: number, y: number): number {
    return x + y; // number 타입으로 추론
  }

  const result = add(1, 2); // number 타입으로 추론
}
