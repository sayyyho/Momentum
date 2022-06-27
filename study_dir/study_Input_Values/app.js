const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const user = document.querySelector("#greeting");

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

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event){ //event 변수는 관행적으로 이렇게 명명하며,
    // 만약에 존재하면 방금 일어났던 정보를 받겠다는 것이고 알아서 정보가 들어옴. 
    event.preventDefault(); // 어떤 event의 기본 행동을 막는 부분. 기본 제공 함수.
   // 원래 실행 되어야 하는 브라우저의 일을 막음(새로운 링크로 이동이 안됨)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(username);
}

function paintGreeting(username){
    user.innerHTML = `Hello ${username}`;
    user.classList.remove(HIDDEN_CLASS);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onSubmit); // 2번째 인자인 함수명을 주면 js가 알아서 함수 실행을 해줌 // 그 증거로 함수내에서 변수를 하나 추가하면 정보에 관한 오브젝트를 받을 수 있음
} else {
    paintGreeting(savedUsername);
}