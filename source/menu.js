//this function takes two parameters (array of menu items, class to assign a tag to <ul>)

import './menu.scss';

export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function(item) {
        listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
}