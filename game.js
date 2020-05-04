// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue )
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('blue')){
  evt.target.classList.toggle('green')
  updateCounts()}
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt){
  evt.target.classList.toggle('blue')
  updateCounts()
}
// CREATE FUNCTION hide HERE
function hide(evt){
  evt.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  var blueCount;
  var greenCount;
  var invisibleCount; 
  
  blueCount = document.querySelectorAll('#board .blue').length,
  totals[0] = blueCount;

  greenCount = document.querySelectorAll('#board .green').length,
  totals[1] = greenCount;

  invisibleCount = document.querySelectorAll('#board .invisible').length,
  totals[2] = invisibleCount;

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}


/*var  b = document.getElementsByClassName("blue"),
var  c = document.getElementsByClassName("green"),
var  d = document.getElementsByClassName("invisible");

if (b.length > 0) {
    document.getElementById('blue-total').length = totals[0];
}; 
if (c.length > 0) {
    document.getElementById('green-total') = totals[1].innerHTML;
} ;
if (d.length > 0) {
  document.getElementById('green-total') = totals[1].innerHTML;
}*/


/*var blueCount = document.getElementsByClassName('blue'),
totals[0] = blueCount.length;

var greenCount = document.getElementsByClassName('green'),
totals[1] = greenCount.length;

var invisibleCount = document.getElementsByClassName('invisible'),
totals[2] = invisibleCount.length; 
document.querySelectorAll('#board .blue').length;