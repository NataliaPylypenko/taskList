import {taskList} from './data';
import displayTaskList from "./displayTaskList";
import editTaskRow from "./editTaskRow";
import delTaskRow from "./delTaskRow";
import arhiveTaskRow from "./arhiveTaskRow";

function getTaskList() {

    document.querySelector('.content').innerHTML = '';

    taskList.forEach(taskItem => {

        displayTaskList(taskItem);

    });

}

export default getTaskList;