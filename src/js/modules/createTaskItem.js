import {taskList} from "./data";
import {getRandomId} from "./functions";
import renderTaskItem from "./renderTaskItem";
import moment from 'moment';

function createTaskItem(formData) {

    const taskItem = {
        ...formData,
        id: getRandomId(),
        created: moment().format('MMMM DD, YYYY'),
        status: "active"
    };

    taskList.push(taskItem);


    renderTaskItem(taskItem);
}

export default createTaskItem;