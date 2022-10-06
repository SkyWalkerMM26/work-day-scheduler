//Pseudocode
// When the user opens the page, there should be the current date
// use moment().format(the day of the week and date)
// There should be time blocks from 9AM to 5PM for the user to input and save.
// use bootstrap to assist with the input and save button. 
// The time block should be color coded of what is considered the past, present, and future. 
// Save the user input into the local storage.
// fxn render the information from the local storage to make sure the info stays as the user refreshes.

$(document).ready(function (){
    var headerTime = moment().format("dddd, MMMM Do");
    $("#currentDay").text(headerTime);

    var currentHH = moment().format("H");

    $(".row").each(function(){
        var inputTime = $(this).attr("id");

        if (currentHH == inputTime) {
            $(this).addClass("present");
            $(this).children("description").addClass("white-text");
        } else if (currentHH < inputTime){
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHH > inputTime){
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

    $(".saveBtn").click(function (event){
        event.preventDefault();
        var storeInput = $(this).siblings(".time-block").val();
        var inputTime = $(this).parent().attr("id");
        localStorage.setItem(inputTime, storeInput);
    });

    $("#9 .time-block").val(localStorage.getItem("9"));
    
})


