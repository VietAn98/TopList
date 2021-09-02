function login() {
  let register = document.getElementById("btnregister");
  let btnlogin = document.getElementById("btnlogin");
  let currentuser = document.getElementById("current-user");

  if (register && btnlogin && currentuser) {
    document.getElementById("btnregister").style.display = "none";
    document.getElementById("btnlogin").style.display = "none";
    document.getElementById("current-user").style.display = "flex";
    document.getElementById("modal-signin").style.display = "none";
  }
}

function logout() {
  let register = document.getElementById("btnregister");
  let btnlogin = document.getElementById("btnlogin");
  let currentuser = document.getElementById("current-user");

  if (register && btnlogin && currentuser) {
    document.getElementById("btnregister").style.display = "block";
    document.getElementById("btnlogin").style.display = "block";
    document.getElementById("current-user").style.display = "none";
    document.getElementById("modal-signup").style.display = "none";
  }
}

function closeNav() {
  let a = document.getElementById("sideNavigate");
  let b = document.getElementById("closebtn");
  let c = document.getElementById("body");
  if ((a, b, c)) {
    document.getElementById("sideNavigate").style.width = "0";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("body").style.overflowY = "scroll";
  }
}

function onClickCategories() {
  if (document.getElementById("list-tags").style.display === "block") {
    document.getElementById("list-tags").style.display = "none";
    document.getElementById("category-fa-chevron-up").style.display = "none";
    document.getElementById("category-fa-chevron-down").style.display = "block";
  } else {
    //up
    document.getElementById("list-tags").style.display = "block";
    document.getElementById("category-fa-chevron-up").style.display = "block";
    document.getElementById("category-fa-chevron-down").style.display = "none";
  }
}

function onClickLanguage() {
  if (document.getElementById("list-language").style.display === "block") {
    document.getElementById("list-language").style.display = "none";
    document.getElementById("language-fa-chevron-up").style.display = "none";
    document.getElementById("language-fa-chevron-down").style.display = "block";
  } else {
    //up
    document.getElementById("list-language").style.display = "block";
    document.getElementById("language-fa-chevron-up").style.display = "block";
    document.getElementById("language-fa-chevron-down").style.display = "none";
  }
}

function onClickUserInfo() {
  if (
    document.getElementById("user-dropdown-content-mobile").style.display ===
    "block"
  ) {
    document.getElementById("user-dropdown-content-mobile").style.display =
      "none";
    document.getElementById("user-fa-chevron-up").style.display = "none";
    document.getElementById("user-fa-chevron-down").style.display = "block";
  } else {
    document.getElementById("user-dropdown-content-mobile").style.display =
      "block";
    document.getElementById("user-fa-chevron-up").style.display = "block";
    document.getElementById("user-fa-chevron-down").style.display = "none";
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function onResizeWindow() {
  var w = window.outerWidth;
  if (w >= 1920) {
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("menu-icon-hidden").style.display = "none";
  }
}

function handleClose() {
  document.getElementById("sideNavigate").style.width = "0";
  document.getElementById("closebtn").style.display = "none";
}

function toPage(url) {
  location.assign(url);
}
//
//
//
//
//
// common
//
//
//
//
//

function onClickOutside(id) {
  window.addEventListener("click", (event) => {
    if (event.target == document.getElementById(`${id}`)) {
      document.getElementById(`${id}`).style.display = "none";
    }
  });
}

function onClickForgetPass() {
  document.getElementById("modal-forget-password").style.display = "block";
  document.getElementById("modal-signup").style.display = "none";
  document.getElementById("modal-signin").style.display = "none";
}
function onClickSignIn() {
  document.getElementById("modal-forget-password").style.display = "none";
  document.getElementById("modal-signup").style.display = "none";
  document.getElementById("modal-signin").style.display = "block";
}
function onClickSignUp() {
  document.getElementById("modal-forget-password").style.display = "none";
  document.getElementById("modal-signup").style.display = "block";
  document.getElementById("modal-signin").style.display = "none";
}

function showModalSignIn() {
  document.getElementById("modal-forget-password").style.display = "none";
  document.getElementById("modal-signin").style.display = "block";
  document.getElementById("modal-signup").style.display = "none";
  document.getElementById("sideNavigate").style.width = "0%";
}

function showModalSignUp() {
  document.getElementById("modal-forget-password").style.display = "none";
  document.getElementById("modal-signup").style.display = "block";
  document.getElementById("modal-signin").style.display = "none";
  document.getElementById("sideNavigate").style.width = "0%";
}

function showSideNav() {
  document.getElementById("sideNavigate").style.width = "100%";
  document.getElementById("closebtn").style.display = "inline-block";
  document.getElementById("modal-forget-password").style.display = "none";
  document.getElementById("modal-signup").style.display = "none";
  document.getElementById("modal-signin").style.display = "none";
}

function handleClose() {
  document.getElementById("sideNavigate").style.width = "0";
  document.getElementById("closebtn").style.display = "none";
}

function handleCloseModal() {
  document.getElementById("modal-forget-password").style.display = "none";
  document.getElementById("modal-signup").style.display = "none";
  document.getElementById("modal-signin").style.display = "none";
}
//
//
//
// account
//
//
//
let date = new Date();
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
let years = [];

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const monthDaysMobile = document.querySelector(".days-mobile");

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

  let eachMonth = "";
  if (
    document.querySelector("#month") &&
    document.querySelector("#dropdown-month")
  ) {
    document.querySelector("#month").innerHTML = months[date.getMonth()];
    for (var i = 0; i < months.length; i++) {
      if (months[date.getMonth()] === months[i]) {
        eachMonth += `<div class="month-item current-month" id=month-${
          i + 1
        } onclick={onClickMonth('month',${i})}>${months[i]}</div>`;
      } else
        eachMonth += `<div class="month-item" id=month-${
          i + 1
        } onclick={onClickMonth('month',${i})}>${months[i]}</div>`;
    }
    document.querySelector("#dropdown-month").innerHTML = eachMonth;
  }

  if (document.querySelector("#month-mobile")) {
    document.querySelector("#month-mobile").innerHTML = months[date.getMonth()];
    for (var i = 0; i < months.length; i++) {
      if (months[date.getMonth()] === months[i]) {
        eachMonth += `<div class="month-item current-month" id=mobile-month-${
          i + 1
        } onclick={onClickMonth('month',${i})}>${months[i]}</div>`;
      } else
        eachMonth += `<div class="month-item" id=mobile-month-${
          i + 1
        } onclick={onClickMonth('mobile-month',${i})}>${months[i]}</div>`;
    }
    document.querySelector("#dropdown-month-mobile").innerHTML = eachMonth;
  }

  let startYear = 2010;
  let endYearIncrement = 3;
  let currentYear = new Date().getFullYear();
  for (let i = 0; i <= currentYear - startYear + endYearIncrement; i++)
    years.push(startYear + i);
  let eachYear = "";
  if (document.querySelector("#year")) {
    document.querySelector("#year").innerHTML = currentYear;
    for (var i = 0; i < years.length; i++) {
      if (currentYear === years[i]) {
        eachYear += `<div class="year-item current-year" id=year-${
          i + 1
        } onclick={onClickMonth('year',${i})}>${years[i]}</div>`;
      } else
        eachYear += `<div class="year-item" id=year-${
          i + 1
        } onclick={onClickYear('year',${i})}>${years[i]}</div>`;
    }
    document.querySelector("#dropdown-years").innerHTML = eachYear;
  }
  if (document.querySelector("#year-mobile")) {
    document.querySelector("#year-mobile").innerHTML = new Date().getFullYear();
    for (var i = 0; i < years.length; i++) {
      if (currentYear === years[i]) {
        eachYear += `<div class="year-item current-year" id=mobile-year-${
          i + 1
        } onclick={onClickMonth('year',${i})}>${years[i]}</div>`;
      } else
        eachYear += `<div class="year-item" id=mobile-year-${
          i + 1
        } onclick={onClickYear('mobile-year',${i})}>${years[i]}</div>`;
    }
    document.querySelector("#dropdown-years-mobile").innerHTML = eachYear;
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
    if (monthDaysMobile) {
      monthDaysMobile.innerHTML = days;
    }
  }
};

function onClickMonth(id, i) {
  let list = document.getElementsByClassName("month-item");
  for (var k = 0; k < list.length - 1; k++) {
    list[k].classList.remove("current-month");
  }
  if (document.getElementById(`${id}-${i + 1}`)) {
    document.getElementById(`${id}-${i + 1}`).classList.add("current-month");
    document.getElementById("dropdown-month").style.display = "none";
    console.log(document.getElementById("dropdown-month").style.display);
    document.getElementById("dropdown-month-mobile").style.display = "none";
    document.querySelector("#month").innerHTML = months[i];
    document.querySelector("#month-mobile").innerHTML = months[i];
  }
}
function onClickYear(id, i) {
  let list = document.getElementsByClassName("year-item");
  for (var k = 0; k < list.length - 1; k++) {
    list[k].classList.remove("current-year");
  }
  if (document.getElementById(`${id}-${i + 1}`)) {
    document.getElementById(`${id}-${i + 1}`).classList.add("current-year");
    document.getElementById("dropdown-years").style.display = "none";
    document.getElementById("dropdown-years-mobile").style.display = "none";
    document.querySelector("#year").innerHTML = years[i];
    document.querySelector("#year-mobile").innerHTML = years[i];
  }
}
function handleClickShowMonths(type) {
  if (type === "desktop") {
    if (
      document.getElementById("dropdown-month") &&
      (document.getElementById("dropdown-month").style.display === "none" ||
        document.getElementById("dropdown-month").style.display === "")
    ) {
      document.getElementById("dropdown-month").style.display = "flex";
      document.getElementById("dropdown-month").style.flexDirection = "column";
    } else {
      document.getElementById("dropdown-month").style.display = "none";
    }
  } else {
    if (
      document.getElementById(
        ("dropdown-month-mobile" &&
          document.getElementById("dropdown-month-mobile").style.display ===
            "none") ||
          document.getElementById("dropdown-month-mobile").style.display === ""
      )
    ) {
      document.getElementById("dropdown-month-mobile").style.display = "flex";
      document.getElementById("dropdown-month-mobile").style.flexDirection =
        "column";
    } else {
      document.getElementById("dropdown-month-mobile").style.display = "none";
    }
  }
}
function handleClickShowYears(type) {
  if (type === "desktop") {
    if (
      document.getElementById("dropdown-years") &&
      (document.getElementById("dropdown-years").style.display === "none" ||
        document.getElementById("dropdown-years").style.display === "")
    ) {
      document.getElementById("dropdown-years").style.display = "flex";
      document.getElementById("dropdown-years").style.flexDirection = "column";
    } else {
      document.getElementById("dropdown-years").style.display = "none";
    }
  } else {
    if (
      document.getElementById("dropdown-years-mobile") &&
      document.getElementById("dropdown-years-mobile").style.display ===
        "none" &&
      document.getElementById("dropdown-years-mobile").style.display === ""
    ) {
      document.getElementById("dropdown-years-mobile").style.display = "flex";
      document.getElementById("dropdown-years-mobile").style.flexDirection =
        "column";
    } else {
      document.getElementById("dropdown-years-mobile").style.display = "none";
    }
  }
}

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

function showDropdownChoice() {
  document.getElementById("calendar").style.display = "none";
  document.getElementById("calendar-mobile").style.display = "none";
  document.getElementById("list-payment").style.display = "none";
  document.getElementById("list-payment-mobile").style.display = "none";
  document.getElementById("list-status-dropdown-mobile").style.display = "none";
  document.getElementById("list-status-dropdown").style.display = "none";
  if (
    document.getElementById("list-status") &&
    document.getElementById("list-status").style.display !== "block"
  ) {
    document.getElementById("list-status").style.display = "block";
  } else {
    document.getElementById("list-status").style.display = "none";
  }

  if (
    document.getElementById("list-status-Mobile") &&
    document.getElementById("list-status-Mobile").style.display !== "block"
  ) {
    document.getElementById("list-status-Mobile").style.display = "block";
  } else {
    document.getElementById("list-status-Mobile").style.display = "none";
  }
}

function showSelect(data) {
  document.getElementById("list-status").style.display = "none";
  document.getElementById("list-status-Mobile").style.display = "none";

  if (data !== "calendar") {
    document.getElementById("calendar").style.display = "none";
    document.getElementById("calendar-mobile").style.display = "none";
    document.getElementById("dropdown-years").style.display = "none";
    document.getElementById("dropdown-years-mobile").style.display = "none";
    document.getElementById("dropdown-month").style.display = "none";
    document.getElementById("dropdown-month-mobile").style.display = "none";
  }
  if (data !== "list-payment") {
    document.getElementById("list-payment").style.display = "none";
    document.getElementById("list-payment-mobile").style.display = "none";
  }
  if (data !== "list-status-dropdown") {
    document.getElementById("list-status-dropdown-mobile").style.display =
      "none";
    document.getElementById("list-status-dropdown").style.display = "none";
  }

  if (
    document.getElementById(data).style.display !== "block" &&
    document.getElementById(data + "-mobile").style.display !== "block"
  ) {
    document.getElementById(data).style.display = "block";
    document.getElementById(data + "-mobile").style.display = "block";
  } else {
    document.getElementById(data).style.display = "none";
    document.getElementById(data + "-mobile").style.display = "none";
    document.getElementById("dropdown-years").style.display = "none";
    document.getElementById("dropdown-years-mobile").style.display = "none";
    document.getElementById("dropdown-month").style.display = "none";
    document.getElementById("dropdown-month-mobile").style.display = "none";
  }
}

function chooseStatusItem(evt, tabName) {
  switch (tabName) {
    case "waiting":
      document.getElementById("list-status-dropdown-mobile").style.display =
        "none";
      document.getElementById("list-status-dropdown").style.display = "none";
      document.getElementById("btn-list-status").innerHTML =
        "Chờ duyệt <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("btn-list-status-mobile").innerHTML =
        "Chờ duyệt <img src='../../Assets/images/chevron-down.png' />";
      break;
    case "published":
      document.getElementById("list-status-dropdown-mobile").style.display =
        "none";
      document.getElementById("list-status-dropdown").style.display = "none";
      document.getElementById("btn-list-status-mobile").innerHTML =
        "Đã xuất bản <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("btn-list-status").innerHTML =
        "Đã xuất bản <img src='../../Assets/images/chevron-down.png' />";
      break;
    case "not-paid-yet":
      document.getElementById("list-payment").style.display = "none";
      document.getElementById("list-payment-mobile").style.display = "none";
      document.getElementById("btn-list-payment").innerHTML =
        "Chưa thanh toán <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("btn-list-payment-mobile").innerHTML =
        "Chưa thanh toán <img src='../../Assets/images/chevron-down.png' />";
      break;
    case "paid":
      document.getElementById("list-payment").style.display = "none";
      document.getElementById("list-payment-mobile").style.display = "none";
      document.getElementById("btn-list-payment-mobile").innerHTML =
        "Đã thanh toán <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("btn-list-payment").innerHTML =
        "Đã thanh toán <img src='../../Assets/images/chevron-down.png' />";
      break;
    default:
      break;
  }
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
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed!";
}
function openTab(evt, tabName) {
  showDropdownChoice();
  var i, tabcontent, tablinks;
  document.getElementById("information").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("change-password").style.display = "none";
  document.getElementById("right-container-w-post").style.display = "none";

  document.getElementById("information-mobile").style.display = "none";
  document.getElementById("settings-mobile").style.display = "none";
  document.getElementById("change-password-mobile").style.display = "none";
  document.getElementById("user-post-container-mobile").style.display = "none";

  switch (tabName) {
    case "information":
      document.getElementById("information").style.display = "block";
      document.getElementById("information-mobile").style.display = "block";
      document.getElementById("button-select-box-mobile").innerHTML =
        "Thông tin cá nhân <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("button-select-box").innerHTML =
        "Thông tin cá nhân <img src='../../Assets/images/chevron-down.png' />";
      break;
    case "settings":
      document.getElementById("settings").style.display = "block";
      document.getElementById("settings-mobile").style.display = "block";
      document.getElementById("button-select-box-mobile").innerHTML =
        "Cài đặt tài khoản <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("button-select-box").innerHTML =
        "Cài đặt tài khoản <img src='../../Assets/images/chevron-down.png' />";
      break;
    case "change-password":
      document.getElementById("change-password").style.display = "block";
      document.getElementById("change-password-mobile").style.display = "block";
      document.getElementById("button-select-box-mobile").innerHTML =
        "Đổi mật khẩu <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("button-select-box").innerHTML =
        "Đổi mật khẩu <img src='../../Assets/images/chevron-down.png' />";

      break;
    case "manage-post":
      document.getElementById("right-container-w-post").style.display = "block";
      document.getElementById("user-post-container-mobile").style.display =
        "block";
      document.getElementById("button-select-box").innerHTML =
        "Quản lý bài viết <img src='../../Assets/images/chevron-down.png' />";
      document.getElementById("button-select-box-mobile").innerHTML =
        "Quản lý bài viết <img src='../../Assets/images/chevron-down.png' />";
      break;

    default:
      break;
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }
  document.getElementById(tabName).style.display = "block";

  evt.currentTarget.className += " selected";
}

function showFilter() {
  if (
    document.getElementById("filter-container") &&
    document.getElementById("filter-container").style.display !== "block"
  ) {
    document.getElementById("filter-container").style.display = "block";
  } else {
    document.getElementById("filter-container").style.display = "none";
  }
}
