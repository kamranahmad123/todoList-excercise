const Headertodo = () => {
  const header = {
    padding: '30px',
    lineHeight: '3em',
    textAlign: 'center',
  };
  const title = {
    color: '#aeadad',
    font: 'larger',
  };
  return (
    <header style={header}>
      <h1 style={title}>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
};
export default Headertodo;
