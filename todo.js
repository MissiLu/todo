function addToList() {
    var todoItem = "<li>" + document.getElementById("myText").value +"</li>"
    document.getElementById("myText").value = ""
  document.getElementById("list").innerHTML += todoItem;
}