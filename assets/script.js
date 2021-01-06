$(document).ready(function () {

    var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay);
  
    // set current dat at the top
  let curDay = moment().format("dddd, MMMM Do, YYYY h:mm a");

  let curTime = moment().format("H");
  let curTimeNum = parseInt(curTime);

  // indicate past/present/future color for each time block
  for (var i = 1; i <= 17; i++) {
    let blTimeNum = parseInt(i);
    let blockID = "#" + "row-" + i;
    if (curTimeNum === blTimeNum) {
      $(blockID).addClass("present");
    }
    if (curTimeNum > blTimeNum) {
      $(blockID).addClass("past");
    }
    if (curTimeNum < blTimeNum) {
      $(blockID).addClass("future");
    }
  }

  // call the function to populate the input values with stored data
  storPlans();

  // save button function
  var saveBtn = $(".saveBtn");

  saveBtn.on("mouseenter", function () {
    $(this).addClass("hover");
  });

  saveBtn.on("mouseleave", function () {
    $(this).removeClass("hover");
  });

  // save button store & retrieve data / local storage
  saveBtn.on("click", function () {
    var saveHr = $(this).attr("save-hr");
    var toDo = $("#" + "row-" + saveHr).val();
    localStorage.setItem(saveHr, toDo);
  });
});

function storPlans() {
  for (var i = 1; i <= 17; i++) {
    $("#" + "row-" + i).val(localStorage.getItem(i));
  }
}
