import InputTodo from 'components/InputTodoList';
import TodoList from 'components/TodoLists';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoLogic = () => {
  const [todo, setTodo] = useState([
    {
      id: '1',
      title: 'Excercise',
      completed: false,
    },
    {
      id: '2',
      title: 'Assignment',
      completed: true,
    },
    {
      id: '3',
      title: 'Watch Movie',
      completed: true,
    },
  ]);
  const handleChanges = (id) => {
    setTodo((Itemstodo) => Itemstodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setTodo([
      ...todo.filter((Item) => Item.id !== id),
    ]);
  };
  const todoItems = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodo([...todo, newTodo]);
  };
  const setUpdates = (updatedTitle, id) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };
  return (
    <div>
      <InputTodo todoItems={todoItems} />
      <TodoList
        todoProps={todo}
        handleChanges={handleChanges}
        delTodos={delTodo}
        setUpdates={setUpdates}
      />
    </div>
  );
};

export default TodoLogic;
