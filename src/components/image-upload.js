import imageUpload from "../assets/image-upload.png";
import exit from "../assets/exit.png";
import { appendAll, createNewElement, newImage } from "../lib/lib.js";

export { createImageSubmitForm };

function createImageSubmitForm(formLabel){
    const modal = document.querySelector(".modal");
    const form = document.querySelector("form");

    const label = createNewElement("label");
    label.setAttribute("for", "image");
    label.textContent = formLabel
    const input = createNewElement("input");
    input.type = "file";
    input.id = "image";
    const submit = createNewElement("button", "submit");
    submit.type = "submit";
    submit.textContent = "Submit";
    const imageIcon = newImage(imageUpload, "image upload icon");
    const exitIcon = newImage(exit, "exit icon");
    exitIcon.classList.add("exit");

    appendAll(form, label, input, submit);
    appendAll(modal, imageIcon, form, exitIcon);
}