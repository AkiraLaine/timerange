var Timerange = function(){}

Timerange.prototype.timeFrom = function(date){
  var dayInMS = 1000 * 60 * 60 * 24;
  var differenceMs = Math.abs(Date.now() - Date.parse(date));
  this.result = Math.round(differenceMs / dayInMS) - 1;
  return this;
}

Timerange.prototype.display = function(){
  var parent = document.getElementById("timerange")
  var isH1 = document.getElementsByTagName("h1")[0];
  var node = document.createElement("h1")
  var textContent = this.result || "Hello World!";
  node.textContent = textContent;
  if(isH1){
    parent.removeChild(isH1);
    parent.appendChild(node);
  } else {
    parent.appendChild(node)
  }
}
