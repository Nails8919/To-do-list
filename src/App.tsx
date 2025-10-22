import { useState } from "react"
import ListItem from "./ListItem"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Sample Task",
    completed: false,
    createdOn: new Date()
  }])

  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-4xl">
        <div className="text-5xl text-semibold">TO-DO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-blue-900 p-2 rounded-lg text-white hover:bg-red-600 cursor-pointer">Add Task</button></div>
          <div>
            <select name="Filter" id="FilterList" className="p-2 rounded-lg bg-gray-300 hover:bg-gray-400 cursor-pointer">
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option selected value="Uncompleted">Uncompleted</option>
            </select>
          </div>
        </div>
        {/* end of buttons */}
        <div className="bg-slate-300 w-full rounded-lg mt-4 px-8 py-6">
          {tasks.map((task) => (
          <ListItem key={task.id} task={task}/>
          ))}
        </div>
        {/* end list */}
      </div>
    </div>

  )
}

export default App