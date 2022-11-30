var p = 0
var count;
var eventArray = [];
var starttime2 = 0;
var format = 0;
var timeform = "";

var event1 = {
  Ename: "MEETING WITH CLIENT",
  loc: "LHR",
  sTime: 9,
  eTime: 10,
}

var event2 = {
  Ename: "MEETING WITH CLIENT",
  loc: "LHR",
  sTime: 11,
  eTime: 12.5,
}

var event3 = {
  Ename: "MEETING WITH CLIENT",
  loc: "MULTAN",
  sTime: 13,
  eTime: 14.5,
}

var event4 = {
  Ename: "MEETING WITH CLIENT",
  loc: "FAISALABAD",
  sTime: 14,
  eTime: 15,
}

var event5 = {
  Ename: "MEETING WITH CLIENT",
  loc: "ISLAMABAD",
  sTime: 17,
  eTime: 20,
}

var event6 = {
  Ename: "MEETING WITH CLIENT",
  loc: "LHR",
  sTime: 17.5,
  eTime: 19,
}
var event7 = {
  Ename: "MEETING WITH CLIENT",
  loc: "LHR",
  sTime: 18,
  eTime: 20,
}
eventArray = [event1, event2, event3, event4, event5, event6, event7]

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

eventArray.forEach(element => {
  var m = createEvent(element.Ename, element.loc, element.sTime, element.eTime)
  console.log(m, "iii")
  elementArray.push(m);


});




for (i = 0; i < elementArray.length; i++) {
  for (j = i + 1; j < elementArray.length; j++) {
    if (eventOverlap(elementArray[i], elementArray[j])) {
      var s = elementArray[i].parentElement;
      var height = ((s.id - eventArray[j].sTime) * -1.9 * 2).toString() + "rem";
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



