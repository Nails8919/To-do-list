
const AddTask = ({ addNewTask }: { addNewTask: (task: string) => void }) => {
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!e.currentTarget.form || !e.currentTarget.form.task.value)
            return
        addNewTask(e.currentTarget.form.task.value)
        e.currentTarget.form.task.value = ""
    }

    return (
        <div className="w-full mt-4">
            <form>
                <div className="mb-4 flex flex-col gap-2 ">
                    <label htmlFor="task" className="text-md font-medium text-black">Task</label>
                    <input type="text" name="task" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to do?" required />
                </div>
                <div>
                    <button title="Submit" className="bg-blue-900 text-center text-white hover:bg-red-600 p-2 rounded-lg hover:cursor-pointer hover:animate-pulse" type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTask