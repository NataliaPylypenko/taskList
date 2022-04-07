import {dateParser, getCategoryIcon} from "./functions";

function displayTaskList(taskItem) {

    const parent = document.querySelector('.table-container .content');

    const element = document.createElement('div');
    element.classList.add('table-row','note-item');

    element.innerHTML = `
      <div class="row-item flex-inherit w-45">
        <div class="logo d-flex justify-content-center align-items-center">
          <i class="fas fa-${getCategoryIcon(taskItem.category)}"></i>
        </div>
      </div>
      <span class="row-item heading-column">${taskItem.name}</span>
      <span class="row-item">${taskItem.created}</span>
      <span class="row-item">${taskItem.category}</span>
      <span class="row-item">${taskItem.content}</span>
      <span class="row-item">${dateParser(taskItem.content)}</span>
      
      <div class="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
         <button type="button" data-id="${taskItem.id}" class="btn-star btn-sm btn-edit"><i class="fas fa-pen"></i></button>
         <button type="button" data-id="${taskItem.id}" class="btn-star btn-sm btn-arhive"><i class="fas fa-folder-plus"></i></button>
         <button type="button" data-id="${taskItem.id}" class="btn-trash btn-sm btn-del"><i class="fas fa-trash"></i></button>
      </div>
    `;

    parent.append(element);
};

export default displayTaskList;