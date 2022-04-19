const title = document.querySelector(".title h1") // css 스타일로 불러올 수 있음
console.log(title); // <h1>sayyyho</h1>
//querySelctor는 오직 첫번째 요소만 출력
//다 출력하고 싶은면 All
//querySelcotor는 하위요소까지 다 데려올 수 있어서 좋음
const titles = document.querySelectorAll(".title h1")
console.log(titles);
title.innerHTML = "S"
titles[1].innerHTML = "h"``