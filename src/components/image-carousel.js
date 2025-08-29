// this module handles functionality of the image carousel
//   -> obtaining and returning the images
//   -> creating dom elements
//   -> moving to the next/previous images
//   -> autoplay functionality 

import { createNewElement, createNewContainer } from "../lib/lib.js";

export { renderCarousel };

// returns an array of the images to be loaded into the carousel
function loadImages(){
    let imageArray = [];

    for(let i = 0; i < localStorage.length; i++){
        imageArray.push(localStorage.getItem(`image #${i}`));
    }
    
    return imageArray;
}
// moves to the next array index and will loop at the end of the array
function NextImage(){
    //increment up with each click
    index++;
    //using mod to loop a set of items
    //increment up the count up, then do a mod (length of the entire set) to get an infinite loop with respect to the set
    index = (index%imageArray.length);
}
// moves to the previous array index and will loop at the beginning of the array
function previousImage(){
    //utilize the infinite loop of the mod operator and subtract by 1, then assigning that value to move backwards in the counter
    index += (imageArray.length-1);
    //using mod to loop a set of items
    index = (index%imageArray.length);
}
// calls nextImage() using setInterval()
function autoPlay(){
    let interval = 4000;

    timerID = setInterval(NextImage, interval);
}
function renderCarousel(images){
    const content = document.querySelector(".content");
    const carousel = createNewContainer("carousel", []);
    content.appendChild(carousel);
}