{
  // 💩
  // function checkNotNullNumber(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error("not vaild number!");
  //   }
  //   return arg;
  // }
  // function checkNotNullString(arg: string | null): string {
  //   if (arg == null) {
  //     throw new Error("not vaild number!");
  //   }
  //   return arg;
  // }
  //
  // const result = checkNotNullNumber(123);
  // console.log(result);
  // checkNotNullNumber(null);

  // 💩
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not vaild number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  // ✨
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not vaild number!");
    }
    return arg;
  }

  const number: number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  console.log(number, boal);
}
