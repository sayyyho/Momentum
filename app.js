const h1 = document.querySelector("div.title:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"
    
    h1.classList.toggle(clickedClass);
    // toggle checks in () class, and if this className isn't existed then add it.
    // if className is existed, then remove it.
    // so, toggle acts like borrow codes 

    /* if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }
    */
    
    /*if(h1.className === clickedClass){
        h1.className = "";
    } else{
        h1.className = clickedClass;
    }*/
}

h1.addEventListener("click", handleTitleClick);
