// DOM elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show Time Function
function showTime() {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

// SET AM OR PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12 hr Format
hour = hour % 12 || 12;

// Output Time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);

};

// Add Zeros
function addZero(n) {
return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// Set background greeting
function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('white.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('evening.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#fff';
  }
}

// Get name
function getName() {
  if (localStorage.getItem('name') === null) {
  name.textContent = '[Enter Name]';
} else {
  name.textContent = localStorage.getItem('name');
}
}

// Set name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
  focus.textContent = '[Focus]';
} else {
  focus.textContent = localStorage.getItem('focus');
}
}

function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        name.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// On Click to erase pre-text
function onClick(e) {
  if (e.type === 'click') {
    this.innerHTML = '';
  }
}

name.addEventListener('click', onClick);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', onClick);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
