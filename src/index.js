// imports
import "./styles.css";
import { renderDropdownMenu } from "./components/dropdown.js";
import { addGlobalEventListener, createNewContainer, newImage } from "./lib/lib.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const leftSidebar = document.querySelector(".left-sidebar");
comboDropdown();

// functions
// combination of both the hover and click mechanisms - feels more fluid and natural to have both options
function comboDropdown(){
  const dropdownElements = renderDropdownMenu();
  leftSidebar.appendChild(createNewContainer("click", [newImage(dropdownElements.dropIcon, "dropdown icon")]));

  const clickDropdown = document.querySelector(".click");
  clickDropdown.classList.add("dropdown");

  for(let item of dropdownElements.menu){
    clickDropdown.appendChild(item);
  }

  dropOnClick(".click", clickDropdown);
  dropOnHover(".click", clickDropdown);
}

// event listeners
function dropOnClick(selector, parent){
  const links = document.querySelectorAll(`${selector} a`);

  addGlobalEventListener("click", `${selector} img`, parent, ()=>{
    links.forEach((e)=>{
      e.classList.toggle("hidden");
    });
  });
}
function dropOnHover(selector, parent){
  const links = document.querySelectorAll(`${selector} a`);

  addGlobalEventListener("mouseover", `${selector} img`, parent, ()=>{
    links.forEach((e)=>{
      e.classList.remove("hidden");
    });
  });
  addGlobalEventListener("mouseleave", selector, parent, ()=>{
    links.forEach((e)=>{
      e.classList.add("hidden");
    });
  });
}