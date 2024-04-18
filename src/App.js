import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "feb 5",
      reminder: "true",
    },
    {
      id: 2,
      text: "meeting",
      day: "feb 10",
      reminder: "true",
    },
    {
      id: 3,
      text: "classes",
      day: "feb 15",
      reminder: "false",
    },
  ]);

  //Add Task
  const addTask=(task)=>{
    // console.log(task)
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
  //Delete Task

  const deleteTask = (id) => {
    // console.log("task deleted")
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reeminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      {/* <h1>Hello from react</h1> */}
      {/* <Header title="Hello"/> */}
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask &&<AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
