$(document).ready(function() {
//this will show the date on top of the page
var todayDate = moment();
$("#currentDay").text(todayDate.format("LLLL"));

// save button 
var saveBtn = $("saveBtn");

// when you click on the save button, all information is saved to the local storage
$(".saveBtn").on("click", function() {
  // get nearby values
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // save in localStorage
  localStorage.setItem(time, value);
});

// TIME BLOCK FUNCTION FOR THE PAST, PRESENT, AND FUTURE CLASS
function timeBlockColor() {
  var hour = moment().hours();

  $(".time-block").each(function() {
      var currentHour = parseInt($(this).attr("id")); 
      if (hour > currentHour){
        $(this).addClass("past");
        
    } else if (hour === currentHour){
        $(this).addClass("present");
        $(this).removeClass("past");

    } else {$(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
  })
};
timeBlockColor();

//Information stays on the page when refreshed
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


});