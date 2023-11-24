const list  = document.querySelector("ul");
const input = document.querySelector("input");
const btn   = document.querySelector("button");

input.focus();

btn.addEventListener('click', addItem);

// function addItem () {
//     const listValue = input.value;
//     input.value = '';
//     const listItem = document.createElement("li");
//     const span =     document.createElement("span");
//     const btn2 =     document.createElement("button");
//     listItem.appendChild(span);
//     listItem.appendChild(btn2);
//     span.textContent = listValue;
//     btn2.textContent = "Delete";
//     list.appendChild(listItem);
//     btn2.addEventListener('click', () => listItem.parentElement.removeChild(listItem));
//     input.focus();
// }

function addItemStorage () {
    const listValue = input.value;
    // input.value = '';
    const newKey = localStorage.length + 1;
    localStorage.setItem(listValue, listValue);
    console.log(listValue);
    return listValue;
}

function addItem () {
    const listValue = addItemStorage();
    input.value = '';
    const listItem = document.createElement("li");
    const span =     document.createElement("span");
    const btn2 =     document.createElement("button");
    listItem.appendChild(span);
    listItem.appendChild(btn2);
    span.textContent = listValue;
    btn2.textContent = "Delete";
    list.appendChild(listItem);
    // btn2.addEventListener('click', () => listItem.parentElement.removeChild(listItem));
    btn2.addEventListener('click', () => deleteItem(listValue ,listItem));
    input.focus();
}

function deleteItem (value, item) {
    localStorage.removeItem(value);
    item.parentElement.removeChild(item);
}
