import "./styles.css";
import { renderDropdown, dropdownEvents } from "./components/dropdown.js";
import { renderImageSubmitForm, imageInputEvents, dialogEvents } from "./components/image-upload.js";
import { renderCarousel } from "./components/image-carousel.js";

//  checks node environment
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

renderDropdown();
renderImageSubmitForm("Upload Your Images");
renderCarousel();

dropdownEvents();
dialogEvents();
imageInputEvents();




