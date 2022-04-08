import {taskList} from "./data";

function arhiveTaskRow() {

    const btnArhives = document.querySelectorAll('.btn-arhive');

    btnArhives.forEach(btnArhive => {

        btnArhive.addEventListener('click', e => {

            const idx = taskList.findIndex(elem => elem.id === e.currentTarget.dataset.id);
            if(idx !== -1) taskList[idx]['status'] = 'unactive';

            e.currentTarget.closest('.note-item').classList.add('note-arhive');
            console.log(taskList);
        })
    })
}

export default arhiveTaskRow;