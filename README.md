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
These are the functions that `Timerange` currently has:
- timeFrom(date,type)
- timeTo(date,type)
- display()

##### timeFrom(date, type)
Find the amount of time from a certain date and/or time.
- `date` is a date object: `new Date()`
- `type` is a string of the 'format' you want the result in. Currently supports `"days"`, `"hours"` and `"minutes"`
Ex: `time.timeFrom(new Date(), "minutes")`

##### timeTo(date, type)
Find the amount of time until a certain date and/or time.
- `date` is a date object: `new Date()`
- `type` is a string of the 'format' you want the result in. Currently supports `"days"`, `"hours"` and `"minutes"`
Ex: `time.timeTo(new Date(), "days")`

##### display()
Simply displays the result on screen. Ex: `time.timeFrom(new Date()).display()`
