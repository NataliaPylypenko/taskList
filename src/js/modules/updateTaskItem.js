import {taskList} from "./data";
import renderTaskList from "./renderTaskTable";

function updateTaskItem(formData, id) {

    const idx = taskList.findIndex(elem => elem.id === id);
    taskList[idx] = {
        ...formData,
        created: taskList[idx]['created'],
        status: taskList[idx]['status'],
    };
    renderTaskList()

}

export default updateTaskItem;