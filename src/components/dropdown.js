// this module handles all of the dropdown menu functionality
//   -> creates the dom elements
//   -> returns all of the necessary info to be assembled in the index.js

import dropIcon from "../assets/menu.png";
import { createNewElement, createNewContainer, newImage } from "../lib/lib.js";

export { renderDropdownMenu };

// returns the created dom elements for the dropdown icon and links
function renderDropdownMenu(){
    const menu = createDropdownMenu("Home", "About", "Shop");

    return {dropIcon, menu};
}
// pushes all the dropdown elements into an easy to handle package
function createDropdownMenu(...items){
    let temp = [];
    for(let item of items){
        temp.push(createDropdownItem(item));
    }

    return temp;
}
// creates a new dropdown item with a working link and label
function createDropdownItem(label, href = "#"){
    console.log(`Rendering ${label} in the dropdown`);
    const element = createNewElement("a", label);
    element.classList.add("hidden");
    element.textContent = label;
    element.href = href + label;

    return element;
}
