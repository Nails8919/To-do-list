import { format } from "date-and-time"
import DeleteButton from "./DeleteButton";
import Edit from "./Edit";
import Task_Status from "./Task_Status";

// interface Task {
//     task: string;
//     createdOn: Date;
// }

const ListItem = ({ task, deleteTask, toggleComplete, setTasktoEdit, updatedTasks, showEditTaskComponent }) => {

    return (
        <div className="bg-white my-4 p-4 rounded-lg flex justify-between">
            <div className="flex">
                <Task_Status task={task} toggleComplete={toggleComplete} />
                <div className="flex flex-col ms-2">
                    <span className="font-bold text-xl">
                        {task.task}
                    </span>
                    <span>{format(task.createdOn, 'YYYY/MM/DD HH:DD:SS')}</span>
                </div>
            </div>
            <div className="flex h-10 w-25 justify-between">
                <DeleteButton taskId={task.id} deleteTask={deleteTask} />
                <Edit taskId={task.id} taskDescription={task.task} setTasktoEdit={setTasktoEdit} />

            </div>
        </div>
    )
}

export default ListItem