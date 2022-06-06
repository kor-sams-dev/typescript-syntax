{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 소심한 납쁜넘...
  let notSure: unknown = 0;
  notSure = 'hello';
  notSure = true;

  // any 💩 당당한 납쁜넘...
  let anything: any = 0;
  anything = 'hello';

  // void
  // 대부분 함수에서 return 이 정해지지 않은 경우 사용됨
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //💩

  // never
  // return 할 수 없는 함수....
  // 함수에서 절대 리턴되지 않는 경우 그것을 명시하기 위해 사용
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }
  let neverEnding: never; // 💩

  // object 💩
  // 어떤 오브젝트던지 마구잡이로 던질 수 있음...
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
