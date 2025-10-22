import { format } from "date-and-time"

const ListItem = ({ task }) => {
    return (
        <div className="bg-white my-4 p-4 rounded-lg flex justify-between">
            <div className="flex">
                <i className="fa-regular fa-square relative top-3 text-2xl"></i>
                <div className="flex flex-col ms-2">
                    <span className="font-bold text-xl">
                        {task.task}
                    </span>
                    <span>{format(task.createdOn, 'YYYY/MM/DD HH:DD:SS')}</span>
                </div>
            </div>
            <div>
                <i className="fa-solid fa-trash text-2xl relative top-3"></i>
                <i className="fa-solid fa-pen text-2xl relative top-3"></i>
            </div>
        </div>
    )
}

export default ListItem