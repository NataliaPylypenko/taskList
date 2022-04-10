import {controls, taskList, tableMain} from "./data";
import {getTaskIndexById} from "./functions";

function registerEditTaskItemHandler() {

    tableMain.addEventListener('click', e => {
        try {
            if (e.target && e.target.closest('.btn-edit')) {

                const id = e.target.closest('.btn-edit').dataset.id
                const idx = getTaskIndexById(id);
                const form = document.getElementById('create-form');

                controls.forEach(control => {
                    form[control].value = taskList[idx][control];
                })

            }
        } catch (e) {
            alert(e.toString())
        }
    })
}

export default registerEditTaskItemHandler;