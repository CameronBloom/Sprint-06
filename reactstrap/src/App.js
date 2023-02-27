import './App.css';

import React, { useState } from 'react';
// import { useEffect } from 'react';
import Todo from './components/Todo';
import TodoTable from './components/TodoTable';
import styled from 'styled-components';

const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;

  ${props => (props.type === "primary") ? "background: #2196f3" : null }
  ${props => (props.type === "success") ? "background: #4caf50" : null }
  ${props => (props.type === "danger") ? "background: #f44336" : null }
  ${props => (props.type === "warning") ? "background: #fdd835" : null }
`;

function App() {

  const [openTodos, setOpenTodos] = useState([
    { title: "fix this app", description: "the submit button doesn't work", status: "open"},
    { title: "fix this app", description: "the todo table doesn't update on todo submission", status: "open"},
    { title: "add a feature", description: "implement the ability to toggle todo status", status: "open"},
    { title: "add a feature", description: "implement a table to switch between open and closed tasks", status: "open"}

  ]);

  // useEffect(() => {
  //   console.log(openTodos)
  //   // axios
  //   //   .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  //   //   .then(res => {
  //   //     setPhoto(res.data)
  //   //     setDate(res.data.date);
  //   //   })
  //   //   .catch(err => console.log(err))
  // }, [JSON.stringify(openTodos)]);


  const addTodo = (title, description) => {
    const newTodos = openTodos
    
    newTodos.push({
      title: title,
      description: description,
      status: "open",
    })
    console.log(newTodos);
    setOpenTodos(newTodos)
  }

  return (
    <div className="App">
      <section className="app-add-todo">
        <Todo addTodo={addTodo}/>
      </section>    
      <section className="app-todo-list">
        <TodoTable openTodos={openTodos} addTodo={addTodo}/>
      </section>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

export default App;
