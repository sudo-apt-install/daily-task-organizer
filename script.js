
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
    // TODO: Add a listener for click events on the save button. This code should
    
    $(".saveBtn").click(function() {
      // use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener

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

    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMM D, YYYY, h:mm a"));
    console.log(today);
  });
});
