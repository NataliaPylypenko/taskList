import {dateParser, getCategoryIcon} from "./functions";

function displayTaskList(taskItem) {

    const parent = document.querySelector('.container .table-container');

    const element = document.createElement('li');
    element.classList.add('table-row');

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
         <button type="button" class="btn-star btn-sm pen"><i class="fas fa-pen"></i></button>
         <button type="button" class="btn-star btn-sm plus"><i class="fas fa-folder-plus"></i></button>
         <button type="button" class="btn-trash btn-sm trash"><i class="fas fa-trash"></i></button>
      </div>
    `;

    parent.append(element);
};

export default displayTaskList;