import {arr, daily} from "./data1.js"
var p = 0
var count;
var starttime2 = 0;
var format = 0;
var timeform = "";

function setAllDay(){

  daily.forEach((element)=>{
    let allday = document.createElement("div");
    let x = document.createElement("p")
    let c = document.createElement("span")
    let y = document.createElement("p")
    x.innerHTML = "ALL DAY-";
    c.innerHTML = element.name; 
    y.innerHTML = element.loc;


    allday.appendChild(x);
    allday.appendChild(c);
    allday.appendChild(y);

    allday.setAttribute("class","inner")
    c.style.color = "green"

    let d = document.getElementById("outer");
    d.appendChild(allday);

  });
}
setAllDay();
function createEvent(eventName, loc, time, endtime) {

  settime(time);

  var Container = document.createElement("div");
  Container.classList.add("event");
  count = p.toString()
  Container.id = count
  Container.style.height = cheight(endtime, time);
  var ti = document.createElement('h3');
  ti.innerHTML = starttime2.toString()
  var name = document.createElement('p');
  name.innerHTML = eventName
  var location = document.createElement('span');
  location.innerHTML = loc
  location.style.color = "green"
  Container.appendChild(ti);
  Container.appendChild(name);
  Container.appendChild(location);
  var element = document.getElementById(time);
  console.log(element)
  element.appendChild(Container);
  p++;
  return Container;
}

function cheight(a, b) {

  var c = (((a - b) * 1.9) * 2).toString() + "rem"
  return c;
}

function eventOverlap(evt1, evt2) {
  const domRect1 = evt1.getBoundingClientRect();
  const domRect2 = evt2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}



var elementArray = [];

arr.forEach(element => {
  var m = createEvent(element.Ename, element.loc, element.sTime, element.eTime)
  // console.log(m, "iii")
  elementArray.push(m);


});

for (let i = 0; i < elementArray.length; i++) {
  for (let j = i + 1; j < elementArray.length; j++) {
    if (eventOverlap(elementArray[i], elementArray[j])) {
      var s = elementArray[i].parentElement;
      var height = ((s.id - arr[j].sTime) * -1.9 * 2).toString() + "rem";
      s.appendChild(elementArray[j]);
      elementArray[j].style.marginTop = height;

    }
  }

}
function settime(time) {
  time = time.toString();
  format = time.split('.');
  console.log(format[0])
  if (format[0] > 12) {
    starttime2 = format[0] - 12;
    timeform = " PM-";
  }
  else {
    starttime2 = time;
    timeform = " AM-";
  }
  if (format[1]) {
    starttime2 = starttime2.toString() + ":30" + timeform;
  } else {
    starttime2 = starttime2.toString() + ":00" + timeform;
  }
}






