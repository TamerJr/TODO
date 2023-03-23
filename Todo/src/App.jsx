import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/TaskBar";
import TaskCard from "./Components/TaskCard";
const App = () => {
  let dataList =JSON.parse( localStorage.getItem("Tasks"))
    ? JSON.parse(localStorage.getItem("Tasks"))
    : [];
  const [tasks, setTasks] = useState(dataList ? [...dataList] : []);
  console.log(localStorage.getItem("Tasks"))
  localStorage.setItem('Tasks',JSON.stringify(tasks))
  return (
    <div className="App">
      <SearchBar tasks={tasks} dataList={dataList} setTasks={setTasks} />
      <TaskCard tasks={tasks} dataList={dataList} setTasks={setTasks} />
    </div>
  );
};

export default App;
