//Client-side JAVASCRIPT

$(document).ready(function() {
  console.log('app.js loaded!');


  //
  $.ajax({
    method: "GET",
    url: "/api/todos",
    success: function (json){
      var allTodos = json;
      console.log(allTodos);
      for (var i = 0; i < allTodos.length; i++) {
        console.log(allTodos[i].description);
        $('#todoList').prepend(`<li>${allTodos[i].description}</li>`);
      }
    }
  });
  //
  //   function postNewTodoSuccess(responseData) {
  //     console.log("created new todo!");
  //     console.log("the new name of the new todo is ", responseData.todo_name);
  //     //renders a new todo
  //   }
  //
  //   function postNewTodoErr(err){
  //     console.log("There was an error ", err);
  //   }

  $('#NewToDo').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    $.post('/api/todos', formData, function(todo){
      renderTodo(todo);
    })
    //reset form input values after formData has been captured
    $(this).trigger("reset");
  });

//this function will render the inputted todo to a list
  function renderTodo(todo) {

    $('#todoList').prepend(`<li>${todo.description}</li>`);
    // We have a list of todos
    // for loop through the todo object array and create html template to update the front end

  }


// modal functionality

  // New To Do Modal
  // Get the modal
  var toDoModal = document.getElementById('myModal');
  // Get the button that opens the modal
  var toDoBtn = document.getElementById('toDoBtn');
  // Get the <span> element that closes the modal
  var toDoSpan = document.getElementsByClassName("close")[0];
  // When the user clicks on the button, open the modal
  toDoBtn.onclick = function() {
      toDoModal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  toDoSpan.onclick = function() {
      toDoModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == toDoModal) {
          toDoModal.style.display = "none";
      }
  }

  // // New List Modal
  // // Get the modal
  // var newListModal = document.getElementById('listModal');
  // // Get the button that opens the modal
  // var newListBtn = document.getElementById('newListBtn');
  // // Get the <span> element that closes the modal
  // var newListSpan = document.getElementById('newListClose')[0];
  // // When the user clicks on the button, open the modal
  // newListBtn.onclick = function() {
  //     newListModal.style.display = "block";
  // }
  // // When the user clicks on <span> (x), close the modal
  // newListClose.onclick = function() {
  //     newListModal.style.display = "none";
  // }
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target == newListModal) {
  //         newListModal.style.display = "none";
  //     }
  // }


});
