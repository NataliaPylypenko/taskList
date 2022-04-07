import {controls, taskList} from "./data";

function editTaskRow() {

    document.querySelectorAll('.btn-edit')
        .forEach(btnEdit => {

            btnEdit.addEventListener('click', e => {

                const idx = taskList.findIndex(elem => elem.id === e.currentTarget.dataset.id);

                if(idx !== -1)  {
                    const form = document.getElementById('create-form');

                    controls.forEach(control => {
                        form[control].value = taskList[idx][control];
                    })
                }
            })
        })


}

export default editTaskRow;