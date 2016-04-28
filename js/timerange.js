/*
  Timerange.js
  Author: Akira Laine
  Created On: 27/04/2016
*/

var Timerange = new Function();

Timerange.prototype = (function(){

  function _checkTimeFrom(date,format){
    var increment = format === "hours" ? 24 : 24 * 60;
    var targetYear = date.getYear() === new Date().getYear() ? 0 : 365 * increment;
    var targetMonth = date.getMonth() === new Date().getMonth() ? 0 : (new Date().getMonth() - date.getMonth()) * 31 * increment;
    var targetDay = date.getDate() === new Date().getDate() ? 0 : (new Date().getDate() - date.getDate()) * increment;
    if(format === "hours"){
      if(date.getHours() > new Date().getHours()){
        targetDay -= (date.getHours() - new Date().getHours());
      } else {
        var targetHour = new Date().getHours() - date.getHours();
      }
    }
    if(format === "minutes"){
      if(date.getHours() > new Date().getHours()){
        targetDay -= (date.getHours() - new Date().getHours()) * 60;
      } else {
        var targetHour = (new Date().getHours() - date.getHours()) * 60
      }
      var targetMinute = date.getMinutes() > new Date().getMinutes() ? -(date.getMinutes() - new Date().getMinutes()) : (new Date().getMinutes() - date.getMinutes());
    }
    console.log(targetYear, targetMonth, targetDay, (targetHour || 0), (targetMinute || 0))
    if(targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0) >= 0){
      return result = targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0)
    } else {
      return "Date not in the past."
    }
  }

  function timeFrom(date, type){
    if(date instanceof Date){
      switch (type) {
        case "days":
          var dayInMS = 1000 * 60 * 60 * 24;
          var differenceMs = Math.abs(Date.now() - Date.parse(date));
          this.result = Math.round(differenceMs / dayInMS) - 1;
          break;
        case "hours":
          this.result = _checkTimeFrom(date, "hours")
          break;
        case "minutes":
          this.result = _checkTimeFrom(date, "minutes")
          break;
        default:
          console.error("'type' is not valid")
          break;
      }
      return this;
    } else {
      console.error("Timerange.timeFrom() takes a date object as an argument eg. new Date()")
    }
  }

  function display(){
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

  return {
    timeFrom: timeFrom,
    display: display
  }
})();
