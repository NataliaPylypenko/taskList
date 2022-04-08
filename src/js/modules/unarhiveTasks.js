import {taskList} from "./data";
import getTaskList from "./getTaskList";
import editTaskRow from "./editTaskRow";
import delTaskRow from "./delTaskRow";
import arhiveTaskRow from "./arhiveTaskRow";

function unarhiveTasks() {

    const btnUnarhive = document.querySelector('.btn-unarhive');

    btnUnarhive.addEventListener('click', e => {

        taskList.forEach(taskItem => {
            taskItem['status'] = 'active'

            console.log(taskItem)
        });

        getTaskList()
        editTaskRow();
        delTaskRow();
        arhiveTaskRow();

    })


}

export default unarhiveTasks;