function App() {
  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-4xl">
        <div className="text-2xl">TODO LIST</div>
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
        <div>List</div>
        {/* end list */}
      </div>
    </div>

  )
}

export default App