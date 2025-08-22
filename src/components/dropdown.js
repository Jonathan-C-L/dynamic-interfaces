import dropIcon from "../assets/menu.png";

export {createDropdownButton};

function createDropdownButton(){
    console.log("Rendering dropdown button");

    return createImage(dropIcon, "dropdown menu icon");
}
function createImage(path, alt){
    const newImage = new Image();
    newImage.src = path;
    newImage.alt = alt;
    return newImage;
}
function createDropdownItem(label, ...tags){

}
