/*
  Timerange.js
  Author: Akira Laine
  Created On: 27/04/2016
*/

var Timerange = new Function();

Timerange.prototype.timeFrom = function(date, type){
  if(date instanceof Date){
    if(date.getDate() <= new Date().getDate() && date.getHours() <= new Date().getHours() && date.getMinutes() <= new Date().getMinutes()){
      switch (type) {
        case "days":
          var dayInMS = 1000 * 60 * 60 * 24;
          var differenceMs = Math.abs(Date.now() - Date.parse(date));
          this.result = Math.round(differenceMs / dayInMS) - 1;
          break;
        case "hours":
          var hoursFromTargetYear = date.getYear() === new Date().getYear() ? 0 : 365 * 24;
          var hoursFromTargetMonth = date.getMonth() === new Date().getMonth() ? 0 : (new Date().getMonth() - date.getMonth()) * 31 * 24;
          var hoursFromTargetDay = date.getDate() === new Date().getDate() ? 0 : (new Date().getDate() - date.getDate()) * 24;
          var hoursFromTargetHours = date.getHours() === new Date().getHours() ? 0 : new Date().getHours() - date.getHours();
          this.result = hoursFromTargetYear + hoursFromTargetMonth + hoursFromTargetDay + hoursFromTargetHours;
          break;
        case "minutes":
          var minutesFromTargetYear = date.getYear() === new Date().getYear() ? 0 : 365 * 24 * 60;
          var minutesFromTargetMonth = date.getMonth() === new Date().getMonth() ? 0 : (new Date().getMonth() - date.getMonth()) * 31 * 24 * 60;
          var minutesFromTargetDay = date.getDate() === new Date().getDate() ? 0 : (new Date().getDate() - date.getDate()) * 24 * 60;
          var minutesFromTargetHours = date.getHours() === new Date().getHours() ? 0 : new Date().getHours() - date.getHours() * 60;
          var minutesFromTargetMinute = date.getMinutes() === new Date().getMinutes() ? 0 : new Date().getMinutes() - date.getMinutes();
          this.result = minutesFromTargetYear + minutesFromTargetMonth + minutesFromTargetDay + minutesFromTargetHours + minutesFromTargetMinute;
        default:
          console.error("'type' is not valid")
          break;
      }
      return this;
    } else {
      console.error("Timerange.timeFrom() only takes date objects that are in the past.")
    }
  } else {
    console.error("Timerange.timeFrom() takes a date object as an argument eg. new Date()")
  }
}

Timerange.prototype.display = function(){
  var parent = document.getElementById("timerange")
  var isTime = document.getElementsByClassName("time")[0];
  var node = document.createElement("h1")
  node.classList.add("time")
  var textContent = this.result || "Hello World!";
  node.textContent = textContent;
  if(isTime){
    parent.removeChild(isTime);
    parent.appendChild(node);
  } else {
    parent.appendChild(node)
  }
}
