import {taskList} from "./data";

function delTaskRow() {

    const btnDels = document.querySelectorAll('.btn-del');

    btnDels.forEach(btnDel => {

        btnDel.addEventListener('click', e => {

            const idx = taskList.findIndex(elem => elem.id === e.currentTarget.dataset.id);
            if(idx !== -1) taskList.splice(idx, 1);

            e.currentTarget.closest('.note-item').remove();
        })
    })


}

export default delTaskRow;