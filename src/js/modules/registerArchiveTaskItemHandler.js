import {controls, taskList} from "./data";
import renderSummaryTable from "./renderSummaryTable";
import {getTaskIndexById} from "./functions";

function registerArchiveTaskItemHandler() {

    document.querySelector('.table-main').addEventListener('click', (e) => {
        try {
            if (e.target && e.target.closest('.btn-archive')) {

                const id = e.target.closest('.btn-archive').dataset.id;

                taskList[getTaskIndexById(id)]['status'] = 'archived';

                e.target.closest('.note-item').classList.add('archived');
                e.target.closest('.note-item').classList.remove('active');

                renderSummaryTable();
            }
        } catch (e) {
            alert(e.toString())
        }
    })

}

export default registerArchiveTaskItemHandler;