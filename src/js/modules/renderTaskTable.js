import {taskList} from './data';
import {clear} from "./functions";
import renderTaskItem from "./renderTaskItem";

function renderTaskTable() {

    clear('.table-main');

    taskList.forEach(taskItem => {

        renderTaskItem(taskItem);

    });

}

export default renderTaskTable;