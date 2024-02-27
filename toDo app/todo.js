let todolIST = [
    {item:"go to clg", 
    date:'2024-02-28'
    },
    {item:"go to schl", 
    date:'2024-05-28'
    }
];
// display();

function addToDo(){
    let inputElement = document.getElementById('todo-input');
    let dateElement = document.getElementById('todo-date');
    let toDoItem = inputElement.value
    let toDodate = dateElement.value
    todolIST.push({item: toDoItem, date: toDodate});
    inputElement.value= ""
    dateElement.value= ""
    display();
}

function display(){
    let containerElements = document.querySelector(".container");
    let newHTML= '';
    for(let i= 2; i < todolIST.length; i++){
        let item = todolIST[i].item
        let date = todolIST[i].date
        newHTML +=`
        <span class="span">${item}</span>   
        <span class="span">${date}</span>
        <button class="dlt_btn" onClick="todolIST.splice(${i},1)
        display()">
        DELETE
        </button> `
    }
    containerElements.innerHTML= newHTML;
}
