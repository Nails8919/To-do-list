
const AddTask = ({ addNewTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!e.currentTarget.form.task.value)
            return
        addNewTask(e.currentTarget.form.task.value)
        e.currentTarget.form.task.value = ""
    }

    return (
        <div className="w-9/10 m-4">
            <form>
                <div>
                    <label htmlFor="task" className="text-sm font-medium text-red-900">Task</label>
                    <input type="text" name="task" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to do?" required />
                </div>
                <div>
                    <button className="border border-blue-900 border-2 text-center hover:bg-blue-900 p-2 rounded-lg mt-4 hover: cursor-pointer" type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTask