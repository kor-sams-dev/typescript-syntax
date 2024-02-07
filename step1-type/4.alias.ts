{
  /**
   * Type Aliases
   */
  type Text = string;
  // const name: string = 'ellie';
  const name: Text = "ellie";
  const address: Text = "korea";

  type Number = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let ellieName: Name;
  // ellieName = 'not name';  // error
  ellieName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
  // isCat = false; // error
}
