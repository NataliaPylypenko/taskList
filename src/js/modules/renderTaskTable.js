import {taskList} from './data';
import {clear, sortByObj} from "./functions";
import renderTaskItem from "./renderTaskItem";

function renderTaskTable() {

    clear('.table-main');

    sortByObj(taskList, 'name').forEach(taskItem => {

        renderTaskItem(taskItem);

    });

}

export default renderTaskTable;