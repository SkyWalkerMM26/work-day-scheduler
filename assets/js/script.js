//Pseudocode
// When the user opens the page, there should be the current date
// use moment().format(the day of the week and date)
// There should be time blocks from 9AM to 5PM for the user to input and save.
// use bootstrap to assist with the input and save button. 
// The time block should be color coded of what is considered the past, present, and future. 
// Save the user input into the local storage: Hint hint(window.onbeforeunload = function(){localStorage.setItem.("event", $("#id").val());})

var headerTime = moment().format("dddd, MMMM Do");
$("#currentDay").text(headerTime);