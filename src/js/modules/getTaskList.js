import {taskList} from './data';
import displayTaskList from "./displayTaskList";

function getTaskList() {

    document.querySelector('.content').innerHTML = '';

    taskList.forEach(taskItem => {

        displayTaskList(taskItem);

    });

}

export default getTaskList;