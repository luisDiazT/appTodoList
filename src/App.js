import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
//import './App.css';

const todos = [

  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar curso de intro a react', completed: false},
  { text: 'Comer Helado', completed: false},
  { text: 'Bañarme', completed: false}

];

function App() {
  return (
    
    <React.Fragment>
    <TodoCounter />


    <TodoSearch />
 

    { <TodoList>
     {todos.map(todo=> (
      <TodoItem key={todo.text} text={todo.text} />
     ))}
    </TodoList> }
    
    <CreateTodoButton />
   
    </React.Fragment>

  );
}

export default App;
