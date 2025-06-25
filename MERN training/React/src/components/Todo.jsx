import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  // Fetch all todos from backend
  const fetchTodo = () => {
    axios.get('http://localhost:3000/todo/get')
      .then(res => setTodos(res.data));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  // Add or Edit a todo
  const handleAddOrEdit = () => {
    if (!task.trim()) return; // prevent empty task

    if (editing) {
      axios.put(`http://localhost:3000/todo/put/${editing._id}`, { task })
        .then(() => {
          fetchTodo();
          setTask('');
          setEditing(null);
        });
    } else {
      axios.post('http://localhost:3000/todo/post', { task, status: false })
        .then(() => {
          fetchTodo();
          setTask('');
        });
    }
  };

  // Delete a todo
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/todo/delete/${id}`)
      .then(() => fetchTodo());
  };

  // Toggle status (completed/incomplete)
  const handleToggleStatus = (todo) => {
    axios.put(`http://localhost:3000/todo/put/${todo._id}`, {
      task: todo.task,
      status: !todo.status
    }).then(() => fetchTodo());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todos</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={e => setTask(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleAddOrEdit}>
        {editing ? 'Update' : 'Add'}
      </button>
      {editing && (
        <button onClick={() => {
          setEditing(null);
          setTask('');
        }} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      )}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {Array.isArray(todos) && todos.map(todo => (
          <li key={todo._id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => handleToggleStatus(todo)}
              style={{
                cursor: 'pointer',
                marginRight: '10px',
                textDecoration: todo.status ? 'line-through' : 'none',
                color: todo.status ? 'green' : 'black'
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => {
              setEditing(todo);
              setTask(todo.task);
            }} style={{ marginRight: '5px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(todo._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
k