import Proptypes from 'prop-types';
import { useState } from 'react';

const InputArea = ({ todoItems }) => {
  const [todotitle, setTodotitle] = useState('');
  const [msg, setMsg] = useState('');
  const handleChanges = (e) => {
    setTodotitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todotitle.trim()) {
      todoItems(todotitle);
      setTodotitle('');
    } else {
      setMsg('Add an item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <input type="text" className="inputtext" placeholder="Add Todo" onChange={handleChanges} value={todotitle} />
        <button type="submit" className="inputsubmit">Add</button>
      </form>
      <span className="submitwarning">{msg}</span>
    </>
  );
};
export default InputArea;
InputArea.propTypes = {
  todoItems: Proptypes.func.isRequired,
};
