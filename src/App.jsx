import { useState } from 'react';
import './App.css';
import TasksList from './components/TasksList/TasksList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSumbit = (event) => {
    event.preventDefault();

    const inputElement = event.target.elements['text-input'];
    const newText = inputElement.value.trim();

    if (newText) {
      setTasks([
        ...tasks,
        {
          text: newText,
          id: tasks.length + 1,
        },
      ]);
    }

    inputElement.value = '';
  }

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  };

  return (
    <div className="App">
      <form class="task-input" onSubmit={handleSumbit}>
      <input type="text" class="text-input" name="text-input"></input>
      <input type="submit" value="Add" class="submit-button"></input>
      </form>
      <TasksList tasks={tasks} onDelete={deleteTask} onToggleCompletion={toggleTaskCompletion}/>
    </div>
  );
}

export default App;
