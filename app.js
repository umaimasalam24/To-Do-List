function addTask(){
    let inputTask = document.getElementById("inputTask");
    let taskText = inputTask.value;
    if(taskText===''){
        alert("Please Enter a Task!");
        return;
    }
    let li = document.createElement('li');
    li.innerText= taskText;
    let delBtn = document.createElement('button');
    delBtn.innerText = '❌'
    delBtn.onclick= function(){
li.remove();
    };
    li.appendChild(delBtn)
    document.getElementById('todolist').appendChild(li);
    inputTask.value= "";
}