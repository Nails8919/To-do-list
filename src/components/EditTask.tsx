import React from 'react'

const EditTask = ({tasktoEdit,updateTask, setTasktoEdit, showEditTaskComponent }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateTask(tasktoEdit.id, tasktoEdit.task);
    
    }
const handleChange=(e:React.FormEvent)=>{
    e.preventDefault();
    setTasktoEdit({
        ...tasktoEdit,
        task: e.target.value
    })
}


    return (
        <div className={"w-full mt-4 + (showEditTaskComponent ? '' : 'hidden')} >"}>
        <form>
            <div className="mb-4 flex flex-col gap-2 ">
                <label htmlFor="task" className="text-md font-medium text-black">Task</label>
                <input type="text"  value={tasktoEdit.task} name="task" id="task" className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to do?" onChange={handleChange} updateTask={updateTask} required />
            </div>
            <div>
                <button title="Submit" className="bg-blue-900 text-center text-white hover:bg-red-600 p-2 rounded-lg hover:cursor-pointer hover:animate-bounce  " type="submit" onClick={handleSubmit}>
                    Save Changes
                </button>
            </div>
        </form>
        </div>
    )
}

export default EditTask