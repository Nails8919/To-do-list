import { format } from "date-and-time"

interface Task {
    task: string;
    createdOn: Date;
}

const ListItem = ({ task }: { task: Task }) => {
    return (
        <div className="bg-white my-4 p-4 rounded-lg flex justify-between">
            <div className="flex h-full w-full gap-1">
                <button className="rounded-lg cursor-pointer bg-gray-300 h-10 w-10 relative top-1.5" title="Mark as complete">
                    <i className="fa-solid fa-square text-gray-300 text-4xl"></i>
                </button>
                <div className="flex flex-col ms-2">
                    <span className="font-bold text-xl">
                        {task.task}
                    </span>
                    <span>{format(task.createdOn, 'YYYY/MM/DD HH:DD:SS')}</span>
                </div>
            </div>
            <div className="flex h-10 w-25 justify-between">
                <button className="rounded-lg cursor-pointer bg-gray-300 h-10 w-10 hover:bg-gray-400" title="Delete task">
                    <i className="fa-solid fa-trash text-2xl rounded-lg pt-1 px-1 pb-1 py-1 cursor-pointer"></i>
                </button>
                <button className="rounded-lg cursor-pointer bg-gray-300 h-10 w-10 hover:bg-gray-400" title="Edit task">
                    <i className="fa-solid fa-pen text-2xl rounded-lg pt-1 px-1 pb-1 py-1 cursor-pointer"></i>
                </button>
            </div>
        </div>
    )
}

export default ListItem