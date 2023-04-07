import { useState } from 'react';
import Proptypes from 'prop-types';
import styles from 'styles/TodoItem.module.css';

const TodoItems = ({
  itemProp, handleChange, delTodos, setUpdates,
}) => {
  const [edit, setEdit] = useState(false);
  const handleEdits = () => {
    setEdit(true);
  };
  const handleUpdates = (event) => {
    if (event.key === 'Enter') {
      setEdit(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEdits}>Edit</button>
        <button type="button" onClick={() => delTodos(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdates(e.target.value, itemProp.id)}
        onKeyDown={handleUpdates}
      />
    </li>
  );
};
export default TodoItems;

TodoItems.propTypes = {
  itemProp: Proptypes.shape({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired,
  }).isRequired,
  handleChange: Proptypes.func.isRequired,
  delTodos: Proptypes.func.isRequired,
  setUpdates: Proptypes.func.isRequired,
};
