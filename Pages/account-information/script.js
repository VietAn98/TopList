const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  if (document.querySelector("#month")) {
    document.querySelector("#month").innerHTML = months[date.getMonth()];
  }
  if (document.querySelector("#year")) {
    document.querySelector("#year").innerHTML = new Date().getFullYear();
  }

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    if (monthDays) {
      monthDays.innerHTML = days;
    }
  }
};

if (document.querySelector(".prev")) {
  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });
}
if (document.querySelector(".next")) {
  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });
}

renderCalendar();

let calendarFlag = 0;
function showCalendar() {
  calendarFlag += 1;
  if (calendarFlag % 2 !== 0) {
    document.getElementById("calendar").style.display = "block";
  } else {
    document.getElementById("calendar").style.display = "none";
  }
  document.getElementById("list-status-dropdown").style.display = "none";
  document.getElementById("list-payment").style.display = "none";
  document.getElementById("list-status").style.display = "none";
}

let PaymentFlag = 0;
function showDropdownPayment() {
  PaymentFlag += 1;
  if (PaymentFlag % 2 !== 0) {
    document.getElementById("list-payment").style.display = "block";
  } else {
    document.getElementById("list-payment").style.display = "none";
  }
  document.getElementById("list-status-dropdown").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("list-status").style.display = "none";
}

let StatusFlag = 0;
function showDropdownStatus() {
  StatusFlag += 1;
  if (StatusFlag % 2 !== 0) {
    document.getElementById("list-status-dropdown").style.display = "block";
  } else {
    document.getElementById("list-status-dropdown").style.display = "none";
  }
  document.getElementById("list-payment").style.display = "none";
  document.getElementById("calendar").style.display = "none";
  document.getElementById("list-status").style.display = "none";
}

let ChoiceFlag = 0;
function showDropdownChoice() {
  ChoiceFlag += 1;
  if (ChoiceFlag % 2 !== 0) {
    document.getElementById("list-status").style.display = "block";
  } else {
    document.getElementById("list-status").style.display = "none";
  }
  document.getElementById("list-payment").style.display = "none";
  document.getElementById("list-status-dropdown").style.display = "none";
  document.getElementById("calendar").style.display = "none";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-calendar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  if (tabName === "manage-post") {
    document.getElementById("right-container-w-post").style.display = "block";
    document.getElementById("right-container").style.display = "none";
  } else {
    document.getElementById("right-container").style.display = "block";
    document.getElementById("right-container-w-post").style.display = "none";
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " selected";
}

function openTabMobile(evt, tabName) {
  var i, tabcontent, tablinks;
  if (tabName === "manage-post") {
    document.getElementById("user-post-container").style.display = "block";
    document.getElementById("information-container").style.display = "none";
  } else {
    document.getElementById("information-container").style.display = "block";
    document.getElementById("user-post-container").style.display = "none";
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }
  if (document.getElementById("list-status")) {
    document.getElementById("list-status").style.display = "none";
  }
  if (document.getElementById(tabName)) {
    document.getElementById(tabName).style.display = "block";
  }
  evt.currentTarget.className += " selected";
}

function showFilter() {
  if (document.getElementById("filter-container")) {
    document.getElementById("filter-container").style.display = "block";
  }
}
