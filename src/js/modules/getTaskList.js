import {taskList} from './data';
import displayTaskList from "./displayTaskList";

function getTaskList() {

    document.querySelector('.table-main .content').innerHTML = '';

    taskList.forEach(taskItem => {

        displayTaskList(taskItem);

    });

}

export default getTaskList;