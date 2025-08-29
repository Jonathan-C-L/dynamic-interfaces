import "./styles.css";
import { renderDropdown, dropdownEvents } from "./components/dropdown.js";
import { renderImageSubmitForm, imageInputEvents, dialogEvents } from "./components/image-upload.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

renderDropdown();
dropdownEvents();
renderImageSubmitForm("Upload Your Images");
dialogEvents();
imageInputEvents();




