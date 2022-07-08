const MYWIDTH = window.screen.availWidth;
const BACKGROUND = document.body

function controlBackGroundColor(){
    const windowSize = window.innerWidth;
    BACKGROUND.className ='';
    if(windowSize >= MYWIDTH * 0.8){
        BACKGROUND.classList.add("yellow");
    } else if(windowSize > MYWIDTH * 0.5 && windowSize < MYWIDTH * 0.8){
        BACKGROUND.classList.add("purple");
    } else{
        BACKGROUND.classList.add("blue");
    }
}

window.addEventListener("resize",controlBackGroundColor);