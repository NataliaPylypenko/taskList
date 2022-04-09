import {taskList} from "./data";
import renderTaskTable from "./renderTaskTable";
import renderSummaryTable from "./renderSummaryTable";

function unarchiveTasks() {

    const btnUnarchive = document.querySelector('.btn-unarchive');

    btnUnarchive.addEventListener('click', e => {

        taskList.forEach(taskItem => {
            taskItem['status'] = 'active'
        });

        renderTaskTable()
        renderSummaryTable();

    })


}

export default unarchiveTasks;