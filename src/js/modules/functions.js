import {categoryIcon} from "./data";
import moment from "moment";

function getCategoryIcon(category) {
    return categoryIcon.find(elem => elem.name === category).icon
}

function dateParser(text) {
    const regexDate = new RegExp('\\d{0,2}\\/\\d{0,2}\\/\\d{4}', 'g');
    const results = [];

    [...text.matchAll(regexDate)].map(item => {
        results.push(moment(item.shift(), 'DD/MM/YYYY').format('DD/MM/YYYY'))
    })

    return results;
}

function getRandomId() {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export {getCategoryIcon, dateParser, getRandomId}