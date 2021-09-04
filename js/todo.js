// 바닐라 JS로 크롬 앱 만들기
// https://nomadcoders.co/javascript-for-beginners/lobby


const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;  // 입력 값 변수 할당
    toDoInput.value = "";             // 이후 input 칸 비우기
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
