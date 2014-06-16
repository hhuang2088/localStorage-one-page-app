"use strict";

$(document).ready(function(){
  // load todos from localStorage.
  if ( localStorage.getItem('todoArr') ) {
    var counter = 0;
    var todoArr = localStorage.getItem('todoArr').split(',');
    // console.log( todoArr );
    for (var i=0; i<todoArr.length; i++) {
      $('#todoList').append(newTodo(todoArr[i]));
    };
  } else {
    var counter = 0;
    var todoArr = [];
  };

  // console.log(todoArr);

  function cleanArray(actual){
    var newArray = new Array();
    for(var i = 0; i<actual.length; i++){
      if (actual[i]){
        newArray.push(actual[i]);
    }
  }
    return newArray;
  };

  // function to create new todo
  function newTodo(submit) {
    var createdTodo = $('<li></li>');
    var trash = $('<img/>');
    trash.attr('class', 'trash');
    trash.attr('src', 'image/trash.png');
    createdTodo.attr('class', 'newTodo');
    createdTodo.attr('id', counter);
    createdTodo.text(submit);
    createdTodo.append(trash);
    counter += 1;
    return createdTodo;
  };



  // function that allows users to create new todos
  $('#todoSubmit').on('click', function(e){
    e.preventDefault();
    var todoSubmit = $('#todoText').val();
    todoArr.push(todoSubmit);
    // console.log(todoArr)
    $('#todoList').append(newTodo(todoSubmit));
    $('#todoText').val('');
  });

  // function that adds strikethrough to target todo

  $('#todos').delegate('.newTodo','click', function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('doneTodo');
  });

  // function that deletes individual todos

  $('#todos').delegate('.trash', 'click', function(){
    var li = $(this).closest('li');
    delete todoArr[li.attr('id')];
    li.remove();
    console.log(todoArr)
  });

  // allows user to save todos currently displayed to localStorage
  
  $('#save').click(function(e){
    e.preventDefault();
    var arr = cleanArray(todoArr);
    var todosInString = arr.join(',');
    localStorage.setItem('todoArr', todosInString);
    // var storedTodos = localStorage.getItem('todoArr');
    // console.log(storedTodos);
  })

  // function that deletes all todos

  $('#delete').click(function(e){
    e.preventDefault();
    $('.newTodo').remove();
    todoArr = [];
    counter = 0;
  });
});