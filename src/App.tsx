import { use, useEffect, useState } from "react"
import ListItem from "./components/ListItem"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"

function App() {

  //Task interface to define task object structure
interface Task {
    id: number,
    task: string,
    completed: boolean,
    createdOn: Date,
  }

  const [tasks, setTasks] = useState <Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState <Task[]>([])

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

    //state to show/hide add and edit components
const [showEditTask, setShowEditTask] = useState (false);
const [showAddTask, setShowAddTask] = useState (false);

const showAddTaskComponent = () => {
  setShowAddTask(!showAddTask);
}

const showEditTaskComponent = (state: boolean) => {
  setShowEditTask(state);
}

const [filterOption, setFilterOption] = useState <number>(0);

const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setFilterOption(parseInt(e.target.value))
}

useEffect(() => {
    filterTasks();
  }, [tasks, filterOption]);
  
  //filter tasks based on filter option selected
  const filterTasks = () => {
    switch (filterOption) {
      case 1:
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case 2:
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
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
      <div className="min-h-screen w-screen flex justify-center bg-stone-100">
        <div className="flex flex-col items-center m-24 w-full max-w-5xl">
          <div className="text-6xl text-bold font-extrabold m-9">TO DO LIST</div>
          <div className="flex w-full justify-between">
            <div>
              <button title="Add a new task" className="bg-blue-900 p-2 rounded-lg text-white hover:bg-red-600 cursor-pointer hover:animate-pulse">Add Task</button></div>
            <div>
              <select onChange={handleFilterChange} title="Choose Option" name="Filter" id="FilterList" className="p-2 border-2 rounded-lg bg-gray-400 hover:bg-gray-400 cursor-pointer">
                <option defaultValue="0" value="0">All</option>
                <option value="1">Completed</option>
                <option value="2">Uncompleted</option>
              </select>
            </div>
          </div>
          {/* end of buttons */}
          <AddTask addNewTask={AddNewTask} showAddTaskComponent={showAddTask} />
          <EditTask tasktoEdit={tasktoEdit} updateTask={updateTask} setTasktoEdit={setTasktoEdit} showEditTaskComponent={showEditTaskComponent} />
          <div className="bg-slate-200 w-full rounded-lg mt-4 px-8 py-6">
            {filteredTasks.map((task) => (
              <ListItem key={task.id} task={task}
                deleteTask={deleteTask} toggleComplete={toggleComplete} setTasktoEdit={setTasktoEdit} updatedTasks={updateTask} showEditTaskComponent={showEditTaskComponent} />
            ))}
          </div>
          {/* end list */}
        </div>
      </div>


    )
  }

  export default App