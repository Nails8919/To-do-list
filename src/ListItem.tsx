
const ListItem = () => {
    return (
        <div className="bg-white my-4 p-4 rounded-lg flex justify-between">
            <div>
                <i className="material-icons">
                    check_box_outline_blank</i>
                ListItem
            </div>
            <div>
                <i className="material-icons">edit</i>
                <i className="material-icons">delete</i>
            </div>
        </div>
    )
}

export default ListItem