import imageUpload from "../assets/image-upload.png";
import exit from "../assets/exit.png";
import { appendAll, createNewElement, newImage, addGlobalEventListener } from "../lib/lib.js";

export { renderImageSubmitForm, imageInputEvents, dialogEvents };

function renderImageSubmitForm(formLabel){
    const modal = document.querySelector(".modal");
    const inputs = document.querySelector(".input");

    const label = createNewElement("label");
    label.setAttribute("for", "image");
    label.textContent = formLabel;
    const input = createNewElement("input");
    input.type = "file";
    input.id = "image";
    input.accept = "image/*";
    const imageIcon = newImage(imageUpload, "image upload icon");
    const exitIcon = newImage(exit, "exit icon");
    exitIcon.classList.add("exit");

    appendAll(inputs, label, input);
    appendAll(modal, imageIcon, inputs, exitIcon);
}
function imageInputEvents(){
    const imageInput = document.querySelector("#image");
    const modal = document.querySelector("dialog");

    imageInput.addEventListener("change", function (){
        // converts file into a data url
        const reader = new FileReader();
        reader.addEventListener("load", (e)=>{
            localStorage.setItem("Uploaded Image", reader.result);
            
        });
        reader.readAsDataURL(this.files[0]);
        window.alert(`${imageInput.value} has been successfully!`);
        imageInput.value = null;
        modal.close();
    });
}
function dialogEvents(){
  const exitButton = document.querySelector(".exit");
  const modal = document.querySelector("dialog");
  const leftSidebar = document.querySelector(".left-sidebar");

  addGlobalEventListener("click", ".dropdown a:last-child", leftSidebar, ()=>{
    modal.showModal();
  });
  addGlobalEventListener("click", ".exit", exitButton, ()=>{
    modal.close();
  });
}