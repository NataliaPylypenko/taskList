import {taskList} from "./data";
import getTaskList from "./getTaskList";
import editTaskRow from "./editTaskRow";
import delTaskRow from "./delTaskRow";
import arhiveTaskRow from "./arhiveTaskRow";
import getPivotTable from "./getPivotTable";

function unarhiveTasks() {

    const btnUnarhive = document.querySelector('.btn-unarhive');

    btnUnarhive.addEventListener('click', e => {

        taskList.forEach(taskItem => {
            taskItem['status'] = 'active'
        });

        getTaskList()
        editTaskRow();
        delTaskRow();
        arhiveTaskRow();
        getPivotTable();

    })


}

export default unarhiveTasks;