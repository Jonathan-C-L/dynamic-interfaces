export { addGlobalEventListener, createNewContainer, createNewElement, newImage, appendAll};

function resetContainer(containerID){
    const container = document.querySelector(containerID);

    // only clears if the dom element exists
    if(container == null){
        return;
    }

    container.innerHTML = "";
}
// event delegation function -> applies to parent container and use 'e' to selector specific elements within
function addGlobalEventListener(type, selector, parent = document, callback){

    parent.addEventListener(type, e =>{
        if(e.target.matches(selector)){
            callback(e);
        }
    });
}
// creates a new container and iterates through the array of child nodes
function createNewContainer(name, children, id = ""){
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(name);
    // optional
    if(id != "")
        container.setAttribute("id", id);

    // check to see if an nodes are in an array to iterate through
    if(Array.isArray(children)){
        children.forEach(child =>{
            container.appendChild(child);
        });
    }

    return container;
}
// using the rest parameter (...) to treat an indefinite number of arguments as an array
function createNewElement(type, ...tags){
    const newElement = document.createElement(type);
    for(let tag of tags){
        newElement.classList.add(tag);
    };

    return newElement;
}
// appends all nodes into the parent node
function appendAll(parent, ...children){
    for(let child of children){
        parent.appendChild(child);
    }
}
//generates random number between min(inclusive) and max(exclusive)
function generateRandomNumber(min = 0, max = 1){
    return Math.floor(Math.random()*(max-min))+min;
}
// function allows image objects to be created in one line
function newImage(path, alt){
    const newImage = new Image();
    newImage.src = path;
    newImage.alt = alt;
    return newImage;
}