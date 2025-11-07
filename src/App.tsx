import { useState } from "react"
import ListItem from "./components/ListItem"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Sample Task",
    completed: false,
    createdOn: new Date()
  }])

  // console.log(tasks)
  const AddNewTask = (taskDetails: string) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    setTasks([...tasks, newTask])
  }

  const updateTask = (taskId: number, taskDescription: string) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === taskId) 
        task.task = taskDescription
        return task
    })
    setTasks(updatedTasks)
  }

  const [tasktoEdit, setTasktoEdit] = useState({
      id: 0,
      task: "",
    })

    const deleteTask = (taskId: number) => {
      const updatedTasks = tasks.filter((task) => {
        return task.id !== taskId
      })
      setTasks(updatedTasks)
    }

    // const setEditTask = (taskId, taskDescription)

    const toggleComplete = (taskId: number) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
      setTasks(updatedTasks)
    }

    return (
      <div className="h-screen w-screen flex justify-center bg-stone-300">
        <div className="flex flex-col items-center m-24 w-full max-w-5xl">
          <div className="text-6xl text-bold font-extrabold m-9">TO DO LIST</div>
          <div className="flex w-full justify-between">
            <div>
              <button title="Add a new task" className="bg-blue-900 p-2 rounded-lg text-white hover:bg-red-600 cursor-pointer hover:animate-pulse">Add Task</button></div>
            <div>
              <select title="Choose Option" name="Filter" id="FilterList" className="p-2 border-2 rounded-lg bg-gray-400 hover:bg-gray-400 cursor-pointer">
                <option defaultValue="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
              </select>
            </div>
          </div>
          {/* end of buttons */}
          <AddTask addNewTask={AddNewTask} />
          <EditTask tasktoEdit={tasktoEdit} updateTask={updateTask} setTasktoEdit={setTasktoEdit} />
          <div className="bg-slate-200 w-full rounded-lg mt-4 px-8 py-6">
            {tasks.map((task) => (
              <ListItem key={task.id} task={task}
                deleteTask={deleteTask} toggleComplete={toggleComplete} setTasktoEdit={setTasktoEdit} updatedTasks={updateTask} />
            ))}
          </div>
          {/* end list */}
        </div>
      </div>


    )
  }

  export default App