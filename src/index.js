// imports
import "./styles.css";
import { dropdownButton } from "./components/dropdown.js";
import { addGlobalEventListener, appendAll } from "./lib/lib.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const main = document.querySelector("main");

addGlobalEventListener("mouseover", "main img", main, (e)=>{
  console.log(e);
});