import "./styles.css";
import { renderDropdownMenu } from "./components/dropdown.js";
import { createImageSubmitForm } from "./components/image-upload.js";
import { addGlobalEventListener, createNewContainer, newImage } from "./lib/lib.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const leftSidebar = document.querySelector(".left-sidebar");
comboDropdown();
createImageSubmitForm("Upload Your Images");

// rendering the dom elements based on the information imported
// combination of both the hover and click mechanisms - feels more fluid and natural to have both options
function comboDropdown(){
  const dropdownElements = renderDropdownMenu();
  leftSidebar.appendChild(createNewContainer("click", [newImage(dropdownElements.dropIcon, "dropdown icon")]));

  const clickDropdown = document.querySelector(".click");
  clickDropdown.classList.add("dropdown");

  for(let item of dropdownElements.menu){
    clickDropdown.appendChild(item);
  }

  dropClick(".click", clickDropdown);
  exitHover(".click", clickDropdown);
}

// event listeners
function dropClick(selector, parent){
  const links = document.querySelectorAll(`${selector} a`);

  addGlobalEventListener("click", selector, parent, ()=>{
    links.forEach((e)=>{
      e.classList.toggle("hidden");
    });
  });
}
function dropHover(selector, parent){
  const links = document.querySelectorAll(`${selector} a`);

  addGlobalEventListener("mouseover", selector, parent, ()=>{
    links.forEach((e)=>{
      e.classList.remove("hidden");
    });
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