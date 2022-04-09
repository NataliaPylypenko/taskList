import {getCategoryIcon} from "./functions";

function displayPivotTable(pivotItem) {

    const parent = document.querySelector('.table-pivot .content');

    const element = document.createElement('div');
    element.classList.add('table-row', 'note-item');

    element.innerHTML = `
      <div class="row-item flex-inherit w-45">
        <div class="logo d-flex justify-content-center align-items-center">
          <i class="fas fa-${getCategoryIcon(pivotItem.category)}"></i>
        </div>
      </div>
      
      <span class="row-item heading-column">${pivotItem.category}</span>
      <span class="row-item">${pivotItem.active}</span>
      <span class="row-item">${pivotItem.archived}</span>
    `;

    parent.append(element);
};

export default displayPivotTable;