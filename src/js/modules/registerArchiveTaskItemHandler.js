import {tableMain, taskList} from "./data";
import renderSummaryTable from "./renderSummaryTable";
import {getTaskIndexById} from "./functions";

function registerArchiveTaskItemHandler() {

    tableMain.addEventListener('click', e => {
        try {
            if (e.target && e.target.closest('.btn-archive')) {

                const id = e.target.closest('.btn-archive').dataset.id;

                const task = taskList[getTaskIndexById(id)];

                task['status'] = task['status'] === 'archived' ? 'active' : 'archived';

                e.target.closest('.note-item').style.display = "none";

                renderSummaryTable();
            }
        } catch (e) {
            alert(e.toString())
        }
    })

}

export default registerArchiveTaskItemHandler;