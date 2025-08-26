import dropIcon from "../assets/menu.png";
import { createNewElement, createNewContainer, newImage } from "../lib/lib.js";

export { renderDropdownMenu };

function renderDropdownMenu(){
    const menu = createDropdownMenu("Home", "About", "Shop");

    return {dropIcon, menu};
}

function createDropdownMenu(...items){
    let temp = [];
    for(let item of items){
        temp.push(createDropdownItem(item));
    }

    return temp;
}

function createDropdownItem(label, href = "#"){
    console.log(`Rendering ${label} in the dropdown`);
    const element = createNewElement("a", label);
    element.classList.add("hidden");
    element.textContent = label;
    element.href = href;

    return element;
}
