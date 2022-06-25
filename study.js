const controler = document.querySelector("h1");
const testBtn = document.querySelector("button")

function ifClick(){
    alert("클릭하셨네요.")
}

function changeColor(){
    controler.style.color = "blue";
}


controler.addEventListener("mouseover", changeColor);
controler.addEventListener("mouseout", ()=>
{
    controler.style.color = "black";
});
testBtn.addEventListener("click", ifClick);