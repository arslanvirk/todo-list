interface Todo {
    text: string;
    complete: boolean;
  }
  //Define Function Prototype
  type ToggleTodo = (selectedTodo: Todo) => void;
  type AddTodo = (text: string) => void;