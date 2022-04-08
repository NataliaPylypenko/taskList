// JS

import getTaskList from "./modules/getTaskList";
import addTaskRow from "./modules/addTaskRow";
import delTaskRow from "./modules/delTaskRow";
import editTaskRow from "./modules/editTaskRow";
import arhiveTaskRow from "./modules/arhiveTaskRow";
import unarhiveTasks from "./modules/unarhiveTasks";


window.addEventListener('DOMContentLoaded', () => {

    getTaskList();
    addTaskRow();
    delTaskRow();
    editTaskRow();
    arhiveTaskRow();
    unarhiveTasks()

});

// SCSS
import '../scss/style.scss'