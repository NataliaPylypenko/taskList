// JS

import renderTaskTable from "./modules/renderTaskTable";
import registerDelTaskItemHandler from "./modules/registerDelTaskItemHandler";
import registerEditTaskItemHandler from "./modules/registerEditTaskItemHandler";
import registerArchiveTaskItemHandler from "./modules/registerArchiveTaskItemHandler";
import unarchiveTasks from "./modules/unarchiveTasks";

import renderSummaryTable from "./modules/renderSummaryTable";

import submitFormHandler from "./modules/submitFormHandler";


window.addEventListener('DOMContentLoaded', () => {

    submitFormHandler();

    renderTaskTable();
    registerDelTaskItemHandler();
    registerEditTaskItemHandler();
    registerArchiveTaskItemHandler();
    unarchiveTasks();

    renderSummaryTable();

});


// SCSS
import '../scss/style.scss'