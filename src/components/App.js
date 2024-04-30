import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks]= useState(TASKS)
const [categories, setCategory]= useState(CATEGORIES)
const [selectedCategory, setSelectedCategory] = useState('All')

const handleSelectedCategory =(category) => {
  setSelectedCategory(category)
  }

function onTaskFormSubmit(newTask){
 setTasks([...tasks, newTask])

}

function handleDelete(text){
  setTasks(tasks.filter(task => task.text !== text))
}
const filteredTasks= tasks.filter(task=> task.category === selectedCategory || selectedCategory === "All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory} />
      <NewTaskForm   onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
