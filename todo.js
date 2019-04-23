function addToList() {
    var todoItemInput = document.getElementById("myText").value
    console.log(typeof todoItemInput)
    if (todoItemInput == "") { 
        return
    }
    // debugger //точка остановки
    var todoItem = '<li><input type="checkbox"/>' + todoItemInput + '<button type="button">delete</button></li>'
    console.log(todoItem)
    document.getElementById("myText").value = ""
    
    document.getElementById("list").innerHTML += todoItem;
    // var string = '' // ""
    // var int = 123
    // var float = 1.23
    // var object = {attr1: 123}
    // var array = [string, int, float]
    // var nil = null
    // var boolean = true //false
}