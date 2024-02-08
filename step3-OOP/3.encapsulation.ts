{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(100); // private constructor여서 사용 불가
  const maker = CoffeeMaker.makeMachine(100);
  // maker.coffeeBeans = -999; // invalid 💩
  console.log(maker);
  maker.fillCoffeeBeans(32);
  console.log(maker);
}

class User {
  // private firstName: string;
  // private lastName: string;
  // // fulName: string; // 이렇게 하면 firstName, lastName이 변경되었을 때, fullName이 변경되지 않음 💩
  // constructor(firstName: string, lastName: string) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   // this.fulName = `${firstName} ${lastName}`;
  // }

  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fulName = `${firstName} ${lastName}`;
  }

  private internalAge = 4;
  get age(): number {
    return this.internalAge;
  }

  set age(num: number) {
    this.internalAge = num;
  }

  set setfirstName(value: string) {
    if (value.length === 0) {
      throw new Error("Please enter a valid first name");
    }
    this.firstName = value;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Steve", "Jobs");
console.log(user.fullName);

user.setfirstName = "Ellie";
console.log(user.fullName);

console.log(user.age);
user.age = 6;
console.log(user.age);
