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
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π© μμ¬ν λ©μλ...
  let notSure: unknown = 0;
  notSure = 'hello';
  notSure = true;

  // any π© λΉλΉν λ©μλ...
  let anything: any = 0;
  anything = 'hello';

  // void
  // λλΆλΆ ν¨μμμ return μ΄ μ ν΄μ§μ§ μμ κ²½μ° μ¬μ©λ¨
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //π©

  // never
  // return ν  μ μλ ν¨μ....
  // ν¨μμμ μ λ λ¦¬ν΄λμ§ μλ κ²½μ° κ·Έκ²μ λͺμνκΈ° μν΄ μ¬μ©
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }
  let neverEnding: never; // π©

  // object π©
  // μ΄λ€ μ€λΈμ νΈλμ§ λ§κ΅¬μ‘μ΄λ‘ λμ§ μ μμ...
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
