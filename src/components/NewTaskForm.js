import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {
const [detailValue, setDetailValue]= useState("")
const [categoryValue, setCategoryValue]= useState("")

function handleSubmit(e){
  e.preventDefault()
  const newTask= {
    text: detailValue,
    category: categoryValue
  }
onTaskFormSubmit(newTask)
}

  function handleDetailInput(e){
    setDetailValue(e.target.value)
  }
  function handleChangeCategory(e){
    setCategoryValue(e.target.value)
  }
  console.log(categoryValue)
  return (
    <form  onSubmit ={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetailInput} value={detailValue} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChangeCategory} value={categoryValue}  name="category">
          <option type="text" name="text">All</option>
          <option type="text" name="text">Code</option>
          <option type="text" name="text">Food</option>
          <option type="text" name="text">Misc</option>
          <option type="text" name="text">Money</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
