import {getCategoryIcon} from "./functions";

function renderSummaryItem(summaryItem) {

    const parent = document.querySelector('.table-summary .content');

    const element = document.createElement('div');
    element.classList.add('table-row', 'note-item');

    element.innerHTML = `
      <div class="row-item flex-inherit w-45">
        <div class="logo d-flex justify-content-center align-items-center">
          <i class="fas fa-${getCategoryIcon(summaryItem.category)}"></i>
        </div>
      </div>
      
      <span class="row-item heading-column">${summaryItem.category}</span>
      <span class="row-item">${summaryItem.active}</span>
      <span class="row-item">${summaryItem.archived}</span>
    `;

    parent.append(element);
};

export default renderSummaryItem;