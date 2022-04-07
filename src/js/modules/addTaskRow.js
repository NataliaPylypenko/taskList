import {taskList, controls} from "./data";
import {getRandomId} from "./functions";
import displayTaskList from "./displayTaskList";
import moment from 'moment';

function addTaskRow() {

    const form = document.getElementById('create-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {};

        controls.forEach(control => {
            formData[control] = e.target[control].value
        })

        const taskItem = {
            id: getRandomId(),
            created: moment().format('MMMM DD, YYYY'),
            ...formData
        };

        taskList.push(taskItem);

        console.log(formData);

        displayTaskList(taskItem);

    })

}

export default addTaskRow;