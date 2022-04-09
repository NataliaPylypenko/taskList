import {getPivotItems, clear} from "./functions";
import renderSummaryItem from "./renderSummaryItem";

function renderSummaryTable() {

    clear('.table-pivot');

    getPivotItems().forEach(pivotItem => {

        renderSummaryItem(pivotItem);

    });
}

export default renderSummaryTable;