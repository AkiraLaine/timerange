# Timerange.js
A simple JavaScript library for date manipulation

## Get Started
Import the code in your `index.html` file:
```
<script src="/path/to/timerange.js"></script>
```
Initialize `Timerange`:
```
var time = new Timerange();
```

## Lights. Camera. Action!
Currently, `Timerange` has 2 functions:
- timeFrom(date,type)
- display()

##### timeFrom(date, type)
- `date` is a date object: `new Date()`
- `type` is a string of the 'format' you want the result in. Currently supports `"days"`, `"hours"` and `"minutes"`
Ex: `time.timeFrom(new Date(), "minutes")`

##### display()
Simply displays the result on screen. Ex: `time.timeFrom(new Date()).display()`
