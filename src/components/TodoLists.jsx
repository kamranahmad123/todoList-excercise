import PropTypes from 'prop-types';
import TodoItems from 'components/TodoItems';

const TodoList = ({
  todoProps, handleChanges, delTodos, setUpdates,
}) => (
  <ul>
    {todoProps.map((todo) => (
      <TodoItems
        key={todo.id}
        itemProp={todo}
        handleChange={handleChanges}
        delTodo={delTodos}
        setUpdate={setUpdates}
      />
    ))}
  </ul>
);
export default TodoList;

TodoList.propTypes = {
  todoProps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleChanges: PropTypes.func.isRequired,
  delTodos: PropTypes.func.isRequired,
  setUpdates: PropTypes.func.isRequired,
};
