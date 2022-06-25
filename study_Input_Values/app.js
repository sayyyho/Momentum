const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


// input을 form 태그로 묶었을 때 필요 없어지는 부분.
// 근데 form으로 묶었을 때 submit type이나 button을 클릭 할 때 
// 자동으로 새로고침(submit)되는 에러가 발생.

// function buttonClick(){
//     const userName = loginInput.value;
//     if (userName === ""){
//         alert("please input your name");
//     }
//     else if(userName.length > 15) {
//         alert("name is too long. please write under 15")
//     } 
//     else {
//         console.log("hello "+ userName);
//     }
// }
// loginButton.addEventListener("click", buttonClick);

function onSubmit(event){ //event 변수는 관행적으로 이렇게 명명하며,
    // 만약에 존재하면 방금 일어났던 정보를 받겠다는 것이고 알아서 정보가 들어옴. 
    event.preventDefault(); // 어떤 event의 기본 행동을 막는 부분. 기본 제공 함수.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onSubmit);