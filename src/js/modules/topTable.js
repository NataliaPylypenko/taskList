const table = [
    {
        "logo": "tasks",
        "name": "Shopping list",
        "created": "April 20, 2021",
        "category": "Task",
        "content": "Tomatoes, bread",
        "dates": ""
    },
    {
        "logo": "random",
        "name": "The theory of evolution",
        "created": "April 27, 2021",
        "category": "Random Thought",
        "content": "The theory of evolution",
        "dates": ""
    },
    {
        "logo": "lightbulb",
        "name": "New Feature",
        "created": "May 05, 2021",
        "category": "Idea",
        "content": "Implement news",
        "dates": ""
    },
    {
        "logo": "quote-right",
        "name": "William Gaddis",
        "created": "May 07, 2021",
        "category": "Quote",
        "content": "Power doesn't could",
        "dates": ""
    },
    {
        "logo": "tasks",
        "name": "Books",
        "created": "May 20, 2021",
        "category": "Task",
        "content": "The learn poem",
        "dates": ""
    }

];

function topTable() {

    class MenuTable {
        constructor(logo, name, created, category, content, dates, parentSelector) {
            this.logo = logo;
            this.name = name;
            this.created = created;
            this.category = category;
            this.content = content;
            this.dates = dates;

            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('li');
            element.classList.add('table-row');

            element.innerHTML = `
                <div class="row-item flex-inherit w-45">
                    <div class="logo d-flex justify-content-center align-items-center">
                        <i class="fas fa-${this.logo}"></i>
                    </div>
                </div>
                <span class="row-item heading-column">${this.name}</span>
                <span class="row-item">${this.created}</span>
                <span class="row-item">${this.category}</span>
                <span class="row-item">${this.content}</span>
                <span class="row-item">${this.dates}</span>
        
                <div class="row-item flex-item flex-inherit w-105 d-flex justify-content-end align-items-center">
                  <button type="button" class="btn-star btn-sm"><i class="fas fa-pen"></i></button>
                  <button type="button" class="btn-star btn-sm"><i class="fas fa-folder-plus"></i></button>
                  <button type="button" class="btn-trash btn-sm"><i class="fas fa-trash"></i></button>
                </div>
            `;
            this.parent.append(element);
        }
    }

    table.forEach(({logo, name, created, category, content, dates, parentSelector}) => {
        new MenuTable(logo, name, created, category, content, dates, '.container .table-container').render();
    });
}

export default topTable;