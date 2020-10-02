document.addEventListener("DOMContentLoaded", () => {

  const theForm = document.getElementById('create-task-form');
  theForm.addEventListener('submit', (event) => {
    let theTask = document.getElementById("new-task-description").value;
    let theList = document.querySelector("div ul");
    let theItem = document.createElement('li');
    theItem.innerHTML = theTask;
    theList.appendChild(theItem);
    document.getElementById("new-task-description").value = "";
    event.preventDefault();
  });

});