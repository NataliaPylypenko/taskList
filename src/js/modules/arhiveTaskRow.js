import {taskList} from "./data";
import getPivotTable from "./getPivotTable";

function arhiveTaskRow() {

    const btnArhives = document.querySelectorAll('.btn-arhive');

    btnArhives.forEach(btnArhive => {

        btnArhive.addEventListener('click', e => {

            const idx = taskList.findIndex(elem => elem.id === e.currentTarget.dataset.id);
            if(idx !== -1) taskList[idx]['status'] = 'archived';

            e.currentTarget.closest('.note-item').classList.add('archived');
            e.currentTarget.closest('.note-item').classList.remove('active');

            getPivotTable();
        })
    })


}

export default arhiveTaskRow;