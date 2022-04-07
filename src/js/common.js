// JS

import getTaskList from "./modules/getTaskList";
import addTaskRow from "./modules/addTaskRow";
import delTaskRow from "./modules/delTaskRow";

window.addEventListener('DOMContentLoaded', () => {

    getTaskList();
    addTaskRow();
    delTaskRow();
    editTaskRow();

});

// SCSS
import '../scss/style.scss'
import editTaskRow from "./modules/editTaskRow";
