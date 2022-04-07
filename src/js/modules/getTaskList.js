import {taskList} from './data';
import displayTaskList from "./displayTaskList";

function getTaskList() {

    taskList.forEach( taskItem => {

        displayTaskList(taskItem);

    });

}

export default getTaskList;