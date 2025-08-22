// imports
import "./styles.css";
import { renderDropdownButton } from "./components/dropdown.js";
import { addGlobalEventListener } from "./lib/lib.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const main = document.querySelector("main");

renderDropdownButton();

addGlobalEventListener("click", "main img", main, (e)=>{
  console.log(e);
});