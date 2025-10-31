
const Task_Status = ({ task, toggleComplete }) => {
    const handleComplete = () => {
        toggleComplete(task.id)
    }
    return (
        <button onClick={handleComplete} className="cursor-pointer" title="Mark as complete">
            {task.completed ? 
            <i className="fa-solid fa-square-check text-5xl text-gray-300 hover:text-gray-400 hover:animate-pulse"></i>
            :
            <i className="fa-solid fa-square text-5xl text-gray-300 hover:text-gray-400 hover:animate-pulse"></i>}

        </button>
    )
}

export default Task_Status