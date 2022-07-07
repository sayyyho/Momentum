// <⚠️ DONT DELETE THIS ⚠️>
//import "style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const myText = document.querySelector("h2");

const superEventHandler = {
  mouseOver : function () {
    myText.innerText = "The mouse is here!";
    myText.style.color = colors[0];
  },
  mouseLeave : function() {
    myText.innerText = "The mouse is gone!";
    myText.style.color = colors[1];
  },
  mouseResize : function() {
    myText.innerText = "you just resized!";
    myText.style.color = colors[2];
  },

  mouseRight : function() {
    myText.innerText = "That was a right click!";
    myText.style.color = colors[4];
  },
};

myText.addEventListener("mouseenter", superEventHandler.mouseOver);
myText.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.mouseResize);
window.addEventListener("contextmenu", superEventHandler.mouseRight);
