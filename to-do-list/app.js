const input= document.querySelector(".list-input");
const button= document.querySelector(".list-button");
const todoList= document.querySelector(".todo-list");

//add event listener
button.addEventListener("click", addToList);
todoList.addEventListener("click", deleteClick);

//functions
function addToList(event){
    event.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const todoLi=document.createElement("li");
    todoLi.innerText=input.value;
    todoLi.classList.add("todo-item");
    todoDiv.appendChild(todoLi)

    const checkedBtn= document.createElement("button");
    checkedBtn.innerHTML= '<i class="fas fa-check"></i>';
    checkedBtn.classList.add("checked-btn");
    todoDiv.appendChild(checkedBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);

    input.value="";
}

function deleteClick(e){
const item=e.target;
if(item.classList[0]==="delete-btn")
{
const y=item.parentElement;
//y.classList.add("fall");
 y.remove();
}
if(item.classList[0]==="checked-btn")
{
    const x=item.parentElement;
    x.classList.toggle("completed");
}
}