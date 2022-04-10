import {tableMain, taskList} from "./data";
import {getTaskIndexById} from "./functions";
import renderSummaryTable from "./renderSummaryTable";

function registerDelTaskItemHandler() {

    tableMain.addEventListener('click', e => {
        try {
            if (e.target && e.target.closest('.btn-del')) {

                const id = e.target.closest('.btn-del').dataset.id

                taskList.splice(getTaskIndexById(id), 1);

                e.target.closest('.note-item').remove();

                renderSummaryTable();
            }
        } catch (e) {
            alert(e.toString())
        }
    })

}

export default registerDelTaskItemHandler;