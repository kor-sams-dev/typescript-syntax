{
  const obj = {
    name: "sam",
  };
  obj.name; // sam
  obj["name"]; // sam

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const name: Name = "hello";
  // const nameError: Name = 123; // error

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "age";
  // const keyError: Keys = 'error' // error

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "sam",
    gender: "male",
    // err: 'error' // error
  };
}
