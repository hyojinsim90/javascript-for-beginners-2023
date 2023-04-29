const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼을 숨김
    const username = loginInput.value; // 제출한 이름 저장
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 이름 저장
    // 환영 화면 보여주기
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // 로컬스토리지에 저장한 이름 보여주기
    greeting.classList.remove(HIDDEN_CLASSNAME); // 숨김표시 삭제
}

/// 초기 진입 세팅

// 초기 진입 시 -> 로컬스토리지에 이름이 저장되어있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 이름이 없으면 -> 로그인폼 보여주기, 클릭시 이벤트 세팅하기
if(savedUsername === null) { 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // 이름이 있으면 -> 환영 화면 보여주기
    paintGreetings(savedUsername);
}