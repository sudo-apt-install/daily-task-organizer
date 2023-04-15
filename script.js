
// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMM D, YYYY, h:mm a"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements
$(document).ready(function () {
  // in the html.
  var $9 = $("#hour-9").find(".description");
  var $10 = $("#hour-10").find(".description");
  var $11 = $("#hour-11").find(".description");
  var $12 = $("#hour-12").find(".description");
  var $13 = $("#hour-13").find(".description");
  var $14 = $("#hour-14").find(".description");
  var $15 = $("#hour-15").find(".description");
  var $16 = $("#hour-16").find(".description");
  var $17 = $("#hour-17").find(".description");
  var $18 = $("#hour-18").find(".description");
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
    $(".saveBtn").click(function () {
      localStorage.setItem("9AM", $9.val());
      localStorage.setItem("10AM", $10.val());
      localStorage.setItem("11AM", $11.val());
      localStorage.setItem("12PM", $12.val());
      localStorage.setItem("1PM", $13.val());
      localStorage.setItem("2PM", $14.val());
      localStorage.setItem("3PM", $15.val());
      localStorage.setItem("4PM", $16.val());
      localStorage.setItem("5PM", $17.val());
      localStorage.setItem("6PM", $18.val());
    });

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentTime = dayjs().format("HH:mm");
    console.log(currentTime);

    $(".time-block").each(function () {
      // Get the hour of this time block (extracted from its id)
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // Compare the block hour to the current hour and apply the appropriate class
      if (blockHour < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockHour == currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });;

    // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    $9.append(localStorage.getItem("9AM"));
    $10.append(localStorage.getItem("10AM"));
    $11.append(localStorage.getItem("11AM"));
    $12.append(localStorage.getItem("12PM"));
    $13.append(localStorage.getItem("1PM"));
    $14.append(localStorage.getItem("2PM"));
    $15.append(localStorage.getItem("3PM"));
    $16.append(localStorage.getItem("4PM"));
    $17.append(localStorage.getItem("5PM"));
    $18.append(localStorage.getItem("6PM"));
  });
});