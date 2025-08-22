import dropIcon from "../assets/menu.png";

export {renderDropdownButton};

function renderDropdownButton(){
    console.log("Rendering dropdown");
    
    const dropdown = createImage(dropIcon, "dropdown menu icon");

    document.querySelector("main").appendChild(dropdown);
}
function createImage(path, alt){
    const newImage = new Image();
    newImage.src = path;
    newImage.alt = alt;
    return newImage;
}
