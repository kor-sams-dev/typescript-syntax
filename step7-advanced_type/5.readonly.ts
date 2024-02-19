{
  type ToDo = {
    title: string;
    description: string;
  };

  // function display(todo: ToDo) {
  //   // todo.title = "jaja"; // 안좋은 케이스
  // }

  function display(todo: Readonly<ToDo>) {
    // todo.title = "jaja"; // error
  }
}
