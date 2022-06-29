const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const user = document.querySelector("#greeting");


const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event){  
    event.preventDefault(); 
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