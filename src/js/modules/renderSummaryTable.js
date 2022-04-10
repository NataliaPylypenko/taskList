import {getSummaryItem, clear} from "./functions";
import renderSummaryItem from "./renderSummaryItem";

function renderSummaryTable() {

    clear('.table-summary');

    getSummaryItem().forEach(summaryItem => {

        renderSummaryItem(summaryItem);

    });
}

export default renderSummaryTable;