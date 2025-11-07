

const Edit = ({ taskId, taskDescription, setTasktoEdit }) => {
  const handlesetTasktoEdit=() =>
  {
    setTasktoEdit({
      id:taskId,
      task: taskDescription
    });
  }
  return (
    <>
      <button className="rounded-lg cursor-pointer bg-gray-300 h-10 w-10 hover:bg-gray-400" title="Edit task">
        <i onClick={handlesetTasktoEdit} className="fa-solid fa-pen text-2xl rounded-lg pt-1 px-1 pb-1 py-1 cursor-pointer"></i>
      </button>
    </>
  )
}

export default Edit