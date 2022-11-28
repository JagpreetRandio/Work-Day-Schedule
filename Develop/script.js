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

      if (currentHour > hour) {
          $(this).addClass("future");
      } else if (currentHour === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};
timeBlockColor();


//Information stays on the page when refreshed
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


});