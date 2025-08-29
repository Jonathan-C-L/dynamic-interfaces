// this module handles all of the dropdown menu functionality
//   -> creates the dom elements
//   -> returns all of the necessary info to be assembled in the index.js

import dropIcon from "../assets/menu.png";
import { createNewElement, appendAll, createNewContainer, newImage, addGlobalEventListener } from "../lib/lib.js";

export { renderDropdown, dropdownEvents };

// returns the created dom elements for the dropdown icon and links
function renderDropdownMenu(){
    const menu = createDropdownMenu("Home", "About", "Add Image");

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
    const element = createNewElement("a");
    element.textContent = label;
    element.href = href + label;

    return element;
}
// rendering the dom elements based on the information imported
// combination of both the hover and click mechanisms - feels more fluid and natural to have both options
function renderDropdown(){
  const leftSidebar = document.querySelector(".left-sidebar");
  leftSidebar.classList.add("container");

  const dropdownElements = renderDropdownMenu();
  leftSidebar.appendChild(newImage(dropdownElements.dropIcon, "dropdown icon"));

  const clickDropdown = createNewElement("div", "hidden", "dropdown", "click");

  for(let item of dropdownElements.menu){
    clickDropdown.appendChild(item);
  }
  leftSidebar.appendChild(clickDropdown);
}

// event listeners
function dropdownEvents(){
  const clickDropdown = document.querySelector(".left-sidebar");

  dropClick(".left-sidebar", clickDropdown);
  exitHover(".click", clickDropdown);
}
function dropClick(selector, parent){
  const links = document.querySelector(".dropdown");

  addGlobalEventListener("click", `${selector} img`, parent, ()=>{
    links.classList.toggle("hidden");
  });
}
function exitHover(selector, parent){
  const links = document.querySelectorAll(`${selector} a`);

  addGlobalEventListener("mouseleave", selector, parent, ()=>{
    links.forEach((e)=>{
      e.classList.add("hidden");
    });
  });
}