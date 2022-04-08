import {taskList, controls} from "./data";
import {getRandomId} from "./functions";
import displayTaskList from "./displayTaskList";
import moment from 'moment';
import getTaskList from "./getTaskList";
import editTaskRow from "./editTaskRow";
import delTaskRow from "./delTaskRow";
import arhiveTaskRow from "./arhiveTaskRow";
import unarhiveTasks from "./unarhiveTasks";

function addTaskRow() {

    const form = document.getElementById('create-form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = {};

        controls.forEach(control => {
            formData[control] = e.target[control].value
        })

        const id = e.target['id'].value

        if(id.length){
            const idx = taskList.findIndex(elem => elem.id === id);
            const taskItemEdit = {
                ...formData,
                created: taskList[idx]['created'],
                status: taskList[idx]['status'],
            };
            taskList[idx] = taskItemEdit;

            getTaskList()
        }else {
            const taskItemAdd = {
                ...formData,
                id: getRandomId(),
                created: moment().format('MMMM DD, YYYY'),
                status: "active"
            };
            taskList.push(taskItemAdd);


            displayTaskList(taskItemAdd);
        }

        form.reset();
        editTaskRow();
        delTaskRow();
        arhiveTaskRow();
        unarhiveTasks();
    })

}

export default addTaskRow;