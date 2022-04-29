import {categories, categoryIcon, taskList} from "./data";
import moment from "moment";

export function getCategoryIcon(category) {

    return categoryIcon.find(elem => elem.name === category).icon

}

export function getRandomId() {

    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

export function getSummaryItem() {

    const start = categories.map(category => ({category, active: 0, archived: 0}));

    return taskList.reduce((acc, p) => {
        const idx = start.findIndex(item => item.category === p.category);
        if (idx !== -1) start[idx][p.status]++
        return start
    }, start);

}

export function dateParser(text) {
    const regexDate = new RegExp('\\d{0,2}\\/\\d{0,2}\\/\\d{4}', 'g');
    const results = [];

    [...text.matchAll(regexDate)].map(item => {
        results.push(moment(item.shift(), 'DD/MM/YYYY').format('DD/MM/YYYY'))
    })

    return results;
}

export function clear(className) {
    return document.querySelector(`${className} .content`).innerHTML = '';
}

export function getTaskIndexById(id) {
    const idx = taskList.findIndex(elem => elem.id === id);
    if(idx === -1) throw new Error('Task item not found')
    return idx
}

const byField = (field) => {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

export const sortByObj = (data, field) => {
    return data.sort(byField(field));
}
