import {controls} from "./data";
import createTaskItem from "./createTaskItem";
import updateTaskItem from "./updateTaskItem";
import renderSummaryTable from "./renderSummaryTable";

function submitFormHandler() {

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = {};
        controls.forEach(control => {
            formData[control] = e.target[control].value
        })

        const id = e.target['id'].value;

        id.length ? updateTaskItem(formData, id) : createTaskItem(formData)

        resetForm(form)
        renderSummaryTable();
    })

}

const resetForm = function (form) {
    controls.forEach(control => {
        if (form[control].tagName === "SELECT") {
            form[control].selectedIndex = 0;
        } else {
            form[control].value = ''
        }

    })
}

export default submitFormHandler;