// imports
import "./styles.css";
import { renderDropdownMenu } from "./components/dropdown.js";
import { addGlobalEventListener, createNewContainer, newImage } from "./lib/lib.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const main = document.querySelector("main");
clickDropdown();
hoverDropdown();

// functions
function clickDropdown(){
  // click dropdown
  const dropdownElements = renderDropdownMenu();
  main.appendChild(createNewContainer("click", [newImage(dropdownElements.dropIcon, "dropdown icon")]));

  const clickDropdown = document.querySelector(".click");
  clickDropdown.classList.add("dropdown");

  for(let item of dropdownElements.menu){
    clickDropdown.appendChild(item);
  }

  dropOnClick(".click img", clickDropdown);
}

function hoverDropdown(){
  // hover dropdown
  const dropdownElements = renderDropdownMenu();
  main.appendChild(createNewContainer("hover", [newImage(dropdownElements.dropIcon, "dropdown icon")]));
  
  const hoverDropdown = document.querySelector(".hover");
  hoverDropdown.classList.add("dropdown");

  for(let item of dropdownElements.menu){
    hoverDropdown.appendChild(item);
  }

  dropOnHover(".hover img", hoverDropdown);
}

// event listeners
function dropOnClick(selector, parent){
  const links = document.querySelectorAll(".click a");

  addGlobalEventListener("click", selector, parent, ()=>{
    links.forEach((e)=>{
      e.classList.toggle("hidden");
    });
  });
}
function dropOnHover(selector, parent){
  const links = document.querySelectorAll(".hover a");

  addGlobalEventListener("mouseover", selector, parent, ()=>{
    links.forEach((e)=>{
      e.classList.remove("hidden");
    });
  });
  addGlobalEventListener("mouseout", ".container.hover", main, ()=>{
    links.forEach((e)=>{
      e.classList.add("hidden");
    });
  });
}