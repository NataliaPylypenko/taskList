import {taskList} from "./data";
import {getRandomId} from "./functions";
import renderTaskItem from "./renderTaskItem";
import moment from 'moment';

function createTodoItem(formData) {

    const todoItem = {
        ...formData,
        id: getRandomId(),
        created: moment().format('MMMM DD, YYYY'),
        status: "active"
    };

    taskList.push(todoItem);


    renderTaskItem(todoItem);
}

export default createTodoItem;