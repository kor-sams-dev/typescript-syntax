{
  /**
   * Type Assertion 💩
   */

  function jsStrFunc(): any {
    return "hello"; // 항상 문자열을 반환하는 함수
  }

  const result = jsStrFunc(); // 무조건 string을 반환하지만 any 타입으로 추론
  // const resultLength = (result as string).length; // 타입을 강제로 string으로 변환
  const resultLength = (<string>result).length; // 타입을 강제로 string으로 변환

  console.log(resultLength);

  function jsStrFunc2(): any {
    return 1;
  }

  const result2 = jsStrFunc2();
  // const resultLength2 = (result2 as string).length; // error 💩
  // console.log(resultLength2); // error 💩

  const wrong: any = 5;
  // console.log(wrong as Array<number>).push(1); // error 💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers!.push(2); // 정말정말 undefined가 아님을 확신할 때 .! 사용

  // 괜찮은 예제
  const button = document.querySelector("class");
  // button.ariaValueMax 💩
  button!.innerHTML; // 정말정말 button이 있음을 확신할 때 .! 사용
}
