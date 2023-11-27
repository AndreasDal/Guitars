const list   = document.querySelector("ul");
const input  = document.querySelector("input");
const btnAdd = document.querySelector("#additem");
const btnRes = document.querySelector("#reset");

input.focus();

btnAdd.addEventListener('click', addItem);
btnRes.addEventListener('click', deleteAllItems);

if (localStorage.length > 0) {
    loadItems();
}

function addStorage () {
    const listValue = input.value;
    // const newKey = localStorage.length + 1;
    localStorage.setItem(listValue, listValue);
    console.log(listValue);
    return listValue;
}

function addItem () {
    const listValue = addStorage();
    input.value = '';
    addElement(listValue);
    input.focus();
}

function addElement(listValue) {
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    listItem.appendChild(span);
    listItem.appendChild(btn);
    span.textContent = listValue;
    btn.textContent = "Delete";
    list.appendChild(listItem);
    btn.addEventListener('click', () => deleteItem(listValue ,listItem));
}

function deleteItem (value, item) {
    localStorage.removeItem(value);
    item.parentElement.removeChild(item);
}

function loadItems () {
    for (item of Object.values(localStorage)) {
        addElement(item);
    }
}

function deleteAllItems () {
    clearStorage();
    while (list.children.length > 0) {
        list.children[0].remove();
    }
}

function clearStorage () {
    localStorage.clear();
}




