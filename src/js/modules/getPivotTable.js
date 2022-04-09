import {taskList} from './data';
import displayPivotTable from "./displayPivotTable";

function getPivotTable() {
    document.querySelector('.table-pivot .content').innerHTML = '';

    const categories = ['Task', 'Random Thought', 'Idea', 'Quote'];
    const start = categories.map(category => ({category, active: 0, archived: 0}));

    const pivotItems = taskList.reduce((acc, p) => {
        const idx = start.findIndex(item => item.category === p.category);
        if(idx !== -1) start[idx][p.status]++
        return start
    }, start);

    pivotItems.forEach(pivotItem => {

        displayPivotTable(pivotItem);

    });
}

export default getPivotTable;