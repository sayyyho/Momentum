const title = document.querySelector(".title:first-child h1");
console.dir(title);

function handleTitleClick(){
    console.log("now touch");
}

function handleMouseEnter(){
    console.log("blue");
    title.innerHTML = "blue"
    title.style.color = "blue";
}

function handleMouseLeave(){
    console.log("black");
    title.innerHTML = "black";
    title.style.color = "black";
}
title.addEventListener("click", handleTitleClick) // 함수 이름만 넘겨줘야 왼쪽 조건일때 함수 실행가능 ()표시는 x 
//html element 가져와서 addEventListener 실행
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);