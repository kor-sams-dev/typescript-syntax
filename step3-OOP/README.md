# OOP (object-oriented programming)

> Imperative and Procedural Programming (절차 지향)
> 하나의 함수를 수정하기 위해서는 전체적인 프로젝트를 이해해야함.

## OOP (객체 지향)

> 객체를 중심으로 프로그래밍을 함.

1. 한곳에서 문제가 생긴다면 해당 객체만 수정하면 됨.
2. 여러번 반복된다면 해당 객체를 복사해서 재사용이 가능함.
3. 새로운 기능이 필요하다면 새로운 객체를 만들어서 추가하면 됨.

## 잘 정의된 객체된 프로그래밍은!

1. 생산성을 높여주고
2. 조금 더 높은 퀄리티의 프로그래밍을 가능하게 함.
3. 더 빠르게 유지보수가 가능함.

## 내부적으로는?

> 객체는 속성과 메소드를 가지고 있음.
> 속성( data, fields ), 메소드 ( function, methods )

### 예시

- MediaPlayer
  - music (data)
  - play (method)
  - stop (method)

Error, Exception, Event 등등 모든 것들이 객체로 정의할 수 있음.

## Class?

- Class

  - template
  - declare once
  - no data in

- Instance
  - instance of a class
  - create many times
  - data in

class는 어떻게 생겼는지를 명시하는 것
instance는 실제로 데이터를 넣은 Object

## 중요한 객체지향 원칙

1. Encapsulation (캡슐화)
2. Abstraction (추상화)
3. Inheritance (상속)
4. Polymorphism (다형성)

### Encapsulation (캡슐화)

- 객체의 속성과 메소드를 하나로 묶고 외부에서의 접근을 제한하는 것
- 관련있는 데이터를 묶어서 관리하는 것

### Abstraction (추상화)

- 복잡한 내부 동작을 감추고 간단한 인터페이스를 제공하는 것
- parent <-> child, super <-> sub, base <-> derived
- IS-A 관계
  - 자식 클래스는 부모 클래스의 모든 것을 가지고 있음

### Inheritance (상속)

- 부모 클래스의 속성과 메소드를 자식 클래스에서 사용할 수 있게 하는 것

### Polymorphism (다형성)

- 하나의 객체가 여러가지 타입을 가질 수 있는 것
