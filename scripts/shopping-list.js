const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

input.focus();

btn.addEventListener('click', addItem);

function addItem () {
    const listValue = input.value;
    input.value = '';
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const btn2 = document.createElement("button");
    listItem.appendChild(span);
    listItem.appendChild(btn2);
    span.textContent = listValue;
    btn2.textContent = "Delete";
    list.appendChild(listItem);
    btn2.addEventListener('click', () => listItem.parentElement.removeChild(listItem));
    input.focus();
}
