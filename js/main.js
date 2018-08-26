//method1
function todoList(){
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}

/*
 name: todolist
 purpose: keep a list of todo item
 version: 1.0
 author: Mateenah
 method2
*/
window.onload = function() {
    //variables
    var form = document.getElementById("todoForm");
    var input = document.getElementById("todoInput");
    var btn = document.getElementById("btn");
    var list = document.getElementById("todoList");
    var id=1;
    // listItem = {item: "todo item", checked: flase}
	var liItem = "";
	var todoList = [];

    //button event listner
    btn.addEventListener("click", addTodoItem);

    //checkbox event listner
    list.addEventListener("click", boxChecked);


    //add todo item to list
    function addTodoItem(){
        if (input.value===""){
            alert("add some value");
        }else{
            // if(list.style.borderBottom===""){
            //     list.style.borderBottom = "2px solid white";
            //     //btnClr.style.display = "inline";
            // }
            var text= input.value;
            var item = `<li id="li-${id}">${text}
                <input id="box-${id}" class="checkboxes" 
                type="checkbox"></li>`
            list.insertAdjacentHTML("beforeend",item);
            id++;
            addToLocalStorage();
            console.log(localStorage);
            form.reset();
        }
       
    }

    //adding strikethrough on checkbox click
    function boxChecked(event){
        const element = event.target;
        var testCheck = document.getElementById("#box");
        console.log(testCheck);
        if(element.type=="checkbox"){
            element.parentNode.style.textDecoration="line-through"; 
            
        }else{
            element.parentNode.style.textDecoration="none"; 
        }
    }

    //adding data to local storage
	function addToLocalStorage() {
		if(typeof(Storage) !== "undefined") {
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}
		else {
			alert("browser doesn't support local storage!");
		}
	}

}
