/*
Tipton Turbines
Calendar web page
Author: Embery Deal
Date:   2.1.18

Filename: tt.js
*/

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"];

var opponents = ["Lightning", "Combines", "Combines", "Lightning", "Lightning", "Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters", "(off)", "River Riders", "River Riders", "River Riders", "Big Dippers", "Big Dippers", "Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];

var gameLocation = ["away", "away", "away", "away", "home", "home", "home", "home", "home", "home", "home", "away", "away", "away", "away", "", "away", "away", "away", "away", "away", "away", "", "home", "home", "home", "home", "home", "home", "", ""];

//function to place daysOfWeek values in header row cells

function addColumnHeaders(){
  var i = 0;
  while (i < 7){
    document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    i++;
  }
}

//function to place day of the month value in first paragraph element within each data table cell that has an id
function addCalendarDates(){
  var i = 1;
  var paragraphs = "";
  do {
    var tableCell = document.getElementById("08-" + i);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[0].innerHTML = i;
    i++;
  }
  while (i <= 31);
}

//function to place opponents values in second paragraph element within each table data cell that has an id
function addGameInfo() {
  var paragraphs = "";
  for (var i = 0; i < 31; i++) {
    var date = i + 1;
    var tableCell = document.getElementById("08-" + date);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[1].innerHTML += opponents[i];
  }
}

//function to populate Calendar
function setUpPage() {
  addColumnHeaders();
  addCalendarDates();
  addGameInfo();
}

//runs addColumnHeaders() function when page loads
window.addEventListener("load", setUpPage);
