import 'styles/TodoApp.css';
import Headertodo from 'components/Header-section';
import TodoLogic from 'components/Todo-logics';

const TodoApplication = () => (
  <div className="todo-wrapper">
    <div className="todos">
      <Headertodo />
      <TodoLogic />
    </div>
  </div>
);
export default TodoApplication;
