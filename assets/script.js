let curDay = moment().format('dddd, MMMM Do, YYYY h:mm a');
$("#currentDay").text(curDay);

let workHrs = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.","5 p.m."]

// for (i = 0; i < workHours.length; i++) {
//     $(".container").append(row);
//     let row = $("<div>").addClass("row");
//     let timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
//     let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
//     saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
//     $(row).append(timeCol).append(inputCol).append(saveBtn);
//     $("#calendar").append(row);
//   }
$.each (workHrs, function(i){
    let row = $("<div>").addClass("row");
    let timeCol = $("<text-area>").text(workHrs[i]).addClass("hour");
    let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
    saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
    $(".container").append(row);
    $(row).append(timeCol).append(inputCol).append(saveBtn);
});

