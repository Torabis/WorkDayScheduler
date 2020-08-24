// set current dat at the top
let curDay = moment().format("dddd, MMMM Do, YYYY h:mm a");
let curTime = moment().format("H");
let curTimeNum = parseInt(curTime);

// $("row-9").attr("data-time", moment("9:00 am", "h:mm a").format("H"));
// $("row-10").attr("data-time", moment("10:00 am", "h:mm a").format("H"));
// $("row-11").attr("data-time", moment("11:00 am", "h:mm a").format("H"));
// $("row-12").attr("data-time", moment("12:00 pm", "h:mm a").format("H"));
// $("row-1").attr("data-time", moment("1:00 pm", "h:mm a").format("H"));
// $("row-2").attr("data-time", moment("2:00 pm", "h:mm a").format("H"));
// $("row-3").attr("data-time", moment("3:00 pm", "h:mm a").format("H"));
// $("row-4").attr("data-time", moment("4:00 pm", "h:mm a").format("H"));
// $("row-5").attr("data-time", moment("5:00 pm", "h:mm a").format("H"));

// indicate past/present/future color for each time block
for (var i = 1; i <= 17; i++) {

  let blTimeNum = parseInt(i);
  
  if (curTimeNum === blTimeNum) {
    $("#" + "row-" + i ).addClass("present");
  }
  if (curTimeNum > blTimeNum) {
    $("#" + "row-" + i ).addClass("past");
  }
  if (curTimeNum < blTimeNum) {
    $("#" + "row-" + i ).addClass("future");
  }
}


