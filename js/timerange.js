/*
  Timerange.js
  Author: Akira Laine
  Created On: 27/04/2016
*/

var Timerange = new Function();

Timerange.prototype = (function(){

  function timeFrom(date, type){
    var increment = type === "hours" ? 24 : 24 * 60;
    var targetYear = date.getYear() === new Date().getYear() ? 0 : 365 * increment;
    var targetMonth = date.getMonth() === new Date().getMonth() ? 0 : (new Date().getMonth() - date.getMonth()) * 31 * increment;
    var targetDay = date.getDate() === new Date().getDate() ? 0 : (new Date().getDate() - date.getDate()) * increment;
    if(type === "days"){
      var dayInMS = 1000 * 60 * 60 * 24;
      var differenceMs = Math.abs(Date.now() - Date.parse(date));
      this.result = Math.round(differenceMs / dayInMS) - 1;
      return this;
    }
    if(type === "hours"){
      if(date.getHours() > new Date().getHours()){
        targetDay -= (date.getHours() - new Date().getHours());
      } else {
        var targetHour = new Date().getHours() - date.getHours();
      }
    }
    if(type === "minutes"){
      if(date.getHours() > new Date().getHours()){
        targetDay -= (date.getHours() - new Date().getHours()) * 60;
      } else {
        var targetHour = (new Date().getHours() - date.getHours()) * 60
      }
      var targetMinute = date.getMinutes() > new Date().getMinutes() ? -(date.getMinutes() - new Date().getMinutes()) : (new Date().getMinutes() - date.getMinutes());
    }
    console.log(targetYear, targetMonth, targetDay, (targetHour || 0), (targetMinute || 0))
    if(targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0) >= 0){
      this.result = targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0)
      return this;
    } else {
      console.error("Date is not in the past.")
    }
  }

  function timeTo(date,type){
    var increment = type === "hours" ? 24 : 24 * 60;
    var targetYear = date.getYear() === new Date().getYear() ? 0 : 365 * increment;
    var targetMonth = date.getMonth() === new Date().getMonth() ? 0 : (date.getMonth() - new Date().getMonth()) * 31 * increment;
    var targetDay = date.getDate() === new Date().getDate() ? 0 : (date.getDate() - new Date().getDate()) * increment;
    if(type === "days"){
      var dayInMS = 1000 * 60 * 60 * 24;
      var differenceMs = Math.abs(Date.parse(date) - Date.now());
      this.result = Math.round(differenceMs / dayInMS) + 1;
      return this;
    }
    if(type === "hours"){
      if(date.getHours() > new Date().getHours()){
        targetDay += (date.getHours() - new Date().getHours());
      } else {
        var targetHour = date.getHours() - new Date().getHours();
      }
    }
    if(type === "minutes"){
      if(date.getHours() > new Date().getHours()){
        targetDay += (date.getHours() - new Date().getHours()) * 60;
      } else {
        var targetHour = (date.getHours() - new Date().getHours()) * 60
      }
      var targetMinute = date.getMinutes() > new Date().getMinutes() ? (date.getMinutes() - new Date().getMinutes()) : -(new Date().getMinutes() - date.getMinutes());
    }
    console.log(targetYear, targetMonth, targetDay, (targetHour || 0), (targetMinute || 0))
    if(targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0) >= 0){
      this.result = targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0)
      return this;
    } else {
      console.error("Date not in the future.");
    }

  }

  function timeBetween(date1,date2,type){
    if(date1 instanceof Date && date2 instanceof Date){
      var increment = type === "hours" ? 24 : 24 * 60;
      var targetYear = date2.getYear() === date1.getYear() ? 0 : 365 * increment;
      var targetMonth = date2.getMonth() === date1.getMonth() ? 0 : (date2.getMonth() - date1.getMonth()) * 31 * increment;
      var targetDay = date2.getDate() === date1.getDate() ? 0 : (date2.getDate() - date1.getDate()) * increment;
      if(type === "days"){
        var dayInMS = 1000 * 60 * 60 * 24;
        var differenceMs = Math.abs(Date.parse(date2) - Date.parse(date1));
        this.result = Math.round(differenceMs / dayInMS);
        return this;
      }
      if(type === "hours") {
        if(date2.getHours() > date1.getHours()){
          targetDay += (date2.getHours() - date1.getHours());
        } else {
          var targetHour = date2.getHours() - date1.getHours();
        }
      }
      if(type === "minutes"){
        if(date2.getHours() > date1.getHours()){
          targetDay += (date2.getHours() - date1.getHours()) * 60;
        } else {
          var targetHour = (date2.getHours() - date1.getHours()) * 60
        }
        var targetMinute = date2.getMinutes() > date1.getMinutes() ? (date2.getMinutes() - date1.getMinutes()) : -(date1.getMinutes() - date2.getMinutes());
      }
      console.log(targetYear, targetMonth, targetDay, (targetHour || 0), (targetMinute || 0))
      if(targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0) >= 0){
        this.result = targetYear + targetMonth + targetDay + (targetHour || 0) + (targetMinute || 0)
        return this;
      } else {
        return "First date argument must be before second date."
      }
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
    timeTo: timeTo,
    timeBetween: timeBetween,
    display: display
  }
})();
