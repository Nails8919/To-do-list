import { format } from "date-and-time"
import DeleteButton from "./DeleteButton";
import Edit from "./Edit";

interface Task {
    task: string;
    createdOn: Date;
}

const ListItem = ({ task }: { task: Task }) => {
    return (
        <div className="bg-white my-4 p-4 rounded-lg flex justify-between">
            <div className="flex">
                <button className="cursor-pointer" title="Mark as complete">
                    <i className="fa-solid fa-square text-5xl text-gray-300 hover:text-gray-400 hover:animate-pulse"></i>
                </button>
                <div className="flex flex-col ms-2">
                    <span className="font-bold text-xl">
                        {task.task}
                    </span>
                    <span>{format(task.createdOn, 'YYYY/MM/DD HH:DD:SS')}</span>
                </div>
            </div>
            <div className="flex h-10 w-25 justify-between">
                <DeleteButton taskId={task.id} />
                <Edit />
            </div>
        </div>
    )
}

export default ListItem