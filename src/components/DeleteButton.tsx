
const DeleteButton = ({ taskId, deleteTask }) => {
  const handleDelete = () => {
    deleteTask(taskId)
  }
  return (
    <>
      <button className="rounded-lg cursor-pointer bg-gray-300 h-10 w-10 hover:bg-gray-400" title="Delete task">
        <i className="fa-solid fa-trash text-2xl rounded-lg pt-1 px-1 pb-1 py-1 cursor-pointer" onClick={handleDelete}></i>
      </button>
    </>
  )
}

export default DeleteButton