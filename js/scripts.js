var List = {
  name: "",
}

$(document).ready(function() {
  var currentList = null;

  $('form#list').submit(function(event){
    event.preventDefault();

    var inputName = $("input#name").val();

    var newList = Object.create(List);

    newList.name = inputName;
    newList.tasks = []



    $('ul#lists').append("<li><span class='list'>" + newList.name + "</span></li>");

    $('input#name').val("");

    $(".list").last().click(function(){
      $(".task-show").show();
      $(".this-list").text(newList.name);
      currentList = newList;
      $('ul#tasks').text("");
      currentList.tasks.forEach(function(task) {
        $('ul#tasks').append("<li><span class='task'>" + task.taskName + "</span></li>");
      });
    });
  });

    $('form#to-do').submit(function(event) {
      event.preventDefault();

      var inputTask = $('input#task').val();
      var inputDueDate = $('input#due_date').val();
      var inputDetails = $('input#details').val();
      var currentTask = null;

      var newToDo = {taskName: inputTask, dueDate: inputDueDate, details: inputDetails};
        currentList.tasks.push(newToDo); //currentlist

      $('ul#tasks').append("<span class = 'task'><li>" + newToDo.taskName + "</li></span>");

      $('input#task').val("");
      $('input#due_date').val("");
      $('input#details').val("");

      $(".task").last().click(function() {
        currentTask = newToDo;
        $("#this-task").show();
        $("#this-task h4").text(currentTask.taskName);
        $(".Due_Date").text(currentTask.dueDate);
        $(".Details").text(currentTask.details);
      });


      $("ul#tasks .task").last().dblclick(function() {
        console.log("click click")
        $(this).appendTo("ul#completed");
        var toDelete = (currentList.tasks).indexOf(this);
        currentList.tasks.splice(toDelete);
      });

    });
});
