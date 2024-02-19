{
  type Vidoe = {
    title: string;
    author: string;
    discription: string;
  };
  // Video의 타입이 추가 / 수정될 때마다 아래 타입도 수정해야함.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   discription?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly discription: string;
  // };

  // map이란
  // [1,2].map(item => item * item); // [1, 4]
  // type 의 map
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in과 비슷함.
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  type VideoOptional = Optional<Vidoe>;
  const videoOp: VideoOptional = {
    title: "hi",
    // error: 'error' // error
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  const video: ReadOnly<Vidoe> = {
    title: "hi",
    discription: "hello",
  };
  // video.title = 'bye'; // error

  const videoNull: Nullable<Vidoe> = {
    title: "hi",
    discription: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
