function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault(); // Prevent reload page
    if (!value) return;
    const newTodos = [...todos, {
        text: value,
        isCompleted: false
    }];
    setTodos(newTodos);
    setValue('');
  }
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
  <>
    {todos.map((todo, i) => <div key={i} className="btn btn-primary w-100 text-start h2" onClick={removeTodo}>{todo.text}</div>)}
    <form onSubmit={handleSubmit}>
        <input type="text" className="w-100" value={value} placeholder="Add to-do item..." onChange={e => setValue(e.target.value)}/>
    </form>
  </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
