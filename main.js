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
  let selected_month;
  if (document.getElementById(`${id}-${i + 1}`)) {
    document.getElementById(`${id}-${i + 1}`).classList.add("current-month");
    document.getElementById("dropdown-month").style.display = "none";
    document.getElementById("dropdown-month-mobile").style.display = "none";
    document.querySelector("#month").innerHTML =
      months[i] +
      `<img
    src="../../Assets/images/arrow-down.png"
    class="ml-12 img-8px"
  />`;
    document.querySelector("#month-mobile").innerHTML =
      months[i] +
      `<img
    src="../../Assets/images/arrow-down.png"
    class="ml-12 img-8px"
  />`;
  }
  var t = new Calendar({
    RenderID: ".render-a",
    Format: "M",
  });
  t.Calendar(
    parseInt(document.querySelector("#year").innerText),
    parseInt(months[i].replaceAll("Tháng ", "")) - 1
  );
}

function onClickYear(id, i) {
  let list = document.getElementsByClassName("year-item");
  for (var k = 0; k < list.length - 1; k++) {
    list[k].classList.remove("current-year");
  }
  if (document.getElementById(`${id}-${i + 1}`)) {
    // date.setFullYear(years[i]);
    document.getElementById(`${id}-${i + 1}`).classList.add("current-year");
    document.getElementById("dropdown-years").style.display = "none";
    document.getElementById("dropdown-years-mobile").style.display = "none";
    document.querySelector("#year").innerHTML =
      years[i] +
      `<img
    src="../../Assets/images/arrow-down.png"
    class="ml-12 img-8px"
  />`;
    document.querySelector("#year-mobile").innerHTML =
      years[i] +
      `<img
    src="../../Assets/images/arrow-down.png"
    class="ml-12 img-8px"
  />`;
    var t = new Calendar({
      RenderID: ".render-a",
      Format: "M",
    });
    t.Calendar(
      years[i],
      parseInt(
        document.querySelector("#month").innerText.replaceAll("Tháng ", "")
      ) - 1
    );
  }
}
function onClickDate(text) {
  var cell_values = document.getElementsByClassName("cell-value");
  var cells = document.querySelector(".cell");

  for (var e = 0; e < cell_values.length - 1; e++) {
    cell_values[e].parentElement.classList.remove("active");
  }
  if (cell_values && cell_values.length !== 0) {
    cell_values[text - 1].parentElement.classList.add("active");
  }

  var date = cell_values[text - 1].innerText;
  var month = document.querySelector("#month").innerText;
  var year = document.querySelector("#year").innerText;
  var container = document.querySelector("#calendar-value");
  container.innerHTML =
    "<span>" +
    date +
    "/" +
    month.replaceAll("Tháng ", "") +
    "/" +
    year +
    "</span>" +
    ` <img
    src="../../Assets/images/chevron-down.png"
    class="margin-image"
  />`;
  document.getElementById("calendar").style.display = "none";
}

function handleClickShowMonths(type) {
  let eachMonth = "";
  var current_month = document.querySelector("#month").innerText;
  for (var i = 0; i < months.length; i++) {
    if (current_month == months[i]) {
      eachMonth += `<div class="month-item current-month" id=month-${
        i + 1
      } onclick={onClickMonth('month',${i})}>${months[i]}</div>`;
    } else
      eachMonth += `<div class="month-item" id=month-${
        i + 1
      } onclick={onClickMonth('month',${i})}>${months[i]}</div>`;
  }
  document.querySelector("#dropdown-month").innerHTML = eachMonth;

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
  let startYear = 2020;
  let endYearIncrement = 3;
  let currentYear = new Date().getFullYear();
  for (let i = 0; i <= currentYear - startYear + endYearIncrement; i++)
    years.push(startYear + i);
  let eachYear = "";
  years = Array.from(new Set(years));
  if (document.querySelector("#year")) {
    currentYear = document.querySelector("#year").innerText;

    for (var i = 0; i < years.length; i++) {
      if (currentYear == years[i]) {
        eachYear += `<div class="year-item current-year" id=year-${
          i + 1
        } onclick={onClickYear('year',${i})}>${years[i]}</div>`;
      } else
        eachYear += `<div class="year-item" id=year-${
          i + 1
        } onclick={onClickYear('year',${i})}>${years[i]}</div>`;
    }
    document.querySelector("#dropdown-years").innerHTML = eachYear;
  }
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

function onClickPrev() {
  date.setMonth(date.getMonth() - 1);
  // // console.log(date.setMonth());
  // if (date.getMonth() === 0) {
  //   date.setFullYear(date.getFullYear() - 1);
  // }
  console.log(date.setFullYear(date.getFullYear() - 1));
  // date.setFullYear(date.setFullYear() - 1);
  // renderCalendar();
}

function onClickNext() {
  date.setMonth(date.getMonth() + 1);
  console.log(date.getMonth() + 1);
  // date.setFullYear(date.setFullYear() + 1);
  renderCalendar();
}

renderCalendar();

function showDropdownChoice() {
  document.getElementById("calendar").style.display = "none";
  // document.getElementById("calendar-mobile").style.display = "none";
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
    // document.getElementById("calendar-mobile").style.display = "none";
    document.getElementById("dropdown-years").style.display = "none";
    // document.getElementById("dropdown-years-mobile").style.display = "none";
    document.getElementById("dropdown-month").style.display = "none";
    // document.getElementById("dropdown-month-mobile").style.display = "none";
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

  var parentPos = document
    .querySelector(".calendar-container")
    .getBoundingClientRect();
  console.log(parentPos);
  if (data === "calendar") {
    if (document.getElementById(data).style.display === "block") {
      document.getElementById(data).style.display = "none";
    } else {
      // document.querySelector("#calendar").style.top =
      //   "-" + (parentPos.top + 440) + "px";
      // document.querySelector("#calendar").style.left = parentPos.left + "px";
      window.onresize = () => {
        document.getElementById(data).style.display = "none";
        // console.log(window.innerHeight, window.innerWidth);
      };
      if (window.innerWidth >= 601 && window.innerWidth <= 3000) {
        document.querySelector("#calendar").style.top =
          "-" + (parentPos.top + 440) + "px";
        document.querySelector("#calendar").style.left = parentPos.left + "px";
        document.getElementById(data).style.display = "block";
      }
      if (window.innerWidth <= 600) {
        console.log(window.innerWidth);
        document.querySelector("#calendar").style.top = "-" + 440 * 2 + "px";
        document.querySelector("#calendar").style.left = 100 + "px";
        document.getElementById(data).style.display = "block";
      }
      document.getElementById(data).style.display = "block";
    }
  } else {
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
      // document.getElementById("dropdown-years-mobile").style.display = "none";
      document.getElementById("dropdown-month").style.display = "none";
      // document.getElementById("dropdown-month-mobile").style.display = "none";
    }
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

var Calendar = function (t) {
  (this.divId = t.RenderID ? t.RenderID : '[data-render="calendara"]'),
    (this.DaysOfWeek = t.DaysOfWeek
      ? t.DaysOfWeek
      : ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]),
    (this.Months = t.Months
      ? t.Months
      : [
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
        ]);
  var e = new Date();
  (this.CurrentMonth = e.getMonth()), (this.CurrentYear = e.getFullYear());
  var r = t.Format;
  this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M";
};
(Calendar.prototype.nextMonth = function () {
  11 == this.CurrentMonth
    ? ((this.CurrentMonth = 0), (this.CurrentYear = this.CurrentYear + 1))
    : (this.CurrentMonth = this.CurrentMonth + 1),
    (this.divId = '[data-active="false"] .render'),
    this.showCurrent();
}),
  (Calendar.prototype.prevMonth = function () {
    0 == this.CurrentMonth
      ? ((this.CurrentMonth = 11), (this.CurrentYear = this.CurrentYear - 1))
      : (this.CurrentMonth = this.CurrentMonth - 1),
      (this.divId = '[data-active="false"] .render'),
      this.showCurrent();
  }),
  (Calendar.prototype.previousYear = function () {
    (this.CurrentYear = this.CurrentYear - 1), this.showCurrent();
  }),
  (Calendar.prototype.nextYear = function () {
    (this.CurrentYear = this.CurrentYear + 1), this.showCurrent();
  }),
  (Calendar.prototype.showCurrent = function () {
    this.Calendar(this.CurrentYear, this.CurrentMonth);
  }),
  (Calendar.prototype.checkActive = function () {
    1 ==
    document.querySelector(".months").getAttribute("class").includes("active")
      ? document.querySelector(".months").setAttribute("class", "months")
      : document
          .querySelector(".months")
          .setAttribute("class", "months active"),
      "true" == document.querySelector(".month-a").getAttribute("data-active")
        ? (document.querySelector(".month-a").setAttribute("data-active", !1),
          document.querySelector(".month-b").setAttribute("data-active", !0))
        : (document.querySelector(".month-a").setAttribute("data-active", !0),
          document.querySelector(".month-b").setAttribute("data-active", !1)),
      setTimeout(function () {
        document
          .querySelector(".calendara .header")
          .setAttribute("class", "header active");
      }, 200),
      document
        .querySelector("body")
        .setAttribute(
          "data-theme",
          this.Months[
            document
              .querySelector('[data-active="true"] .render')
              .getAttribute("data-month")
          ].toLowerCase()
        );
  }),
  (Calendar.prototype.Calendar = function (t, e) {
    "number" == typeof t && (this.CurrentYear = t),
      "number" == typeof t && (this.CurrentMonth = e);
    var r = new Date().getDate(),
      n = new Date().getMonth(),
      a = new Date().getFullYear(),
      o = new Date(t, e, 0).getDay(),
      i = new Date(t, e + 1, 0).getDate(),
      u =
        0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
      s =
        "<span>" +
        "<span id='month' class='c-pointer' onclick=handleClickShowMonths('desktop')>" +
        this.Months[e] +
        `<img
      src="../../Assets/images/arrow-down.png"
      class="ml-12 img-8px"
    />` +
        "</span>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        "<span id='year' class='c-pointer' onclick=handleClickShowYears('desktop')>" +
        t +
        `<img
        src="../../Assets/images/arrow-down.png"
        class="ml-12 img-8px"
      />` +
        "<span>" +
        "</span>",
      d = '<div class="table">';
    d += '<div class="row head">';
    for (var c = 0; c < 7; c++)
      d += '<div class="cell">' + this.DaysOfWeek[c] + "</div>";
    d += "</div>";
    for (
      var h, l = (dm = "M" == this.f ? 1 : 0 == o ? -5 : 2), v = ((c = 0), 0);
      v < 6;
      v++
    ) {
      d += '<div class="row">';
      for (var m = 0; m < 7; m++) {
        if ((h = c + dm - o) < 1)
          d += '<div class="cell disable">' + (u - o + l++) + "</div>";
        else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
        else {
          (d +=
            '<div class="cell' +
            (r == h && this.CurrentMonth == n && this.CurrentYear == a
              ? " active"
              : "") +
            `"><span class="cell-value" onclick="onClickDate(${h})">` +
            h +
            "</span></div>"),
            (l = 1);
        }
        c % 7 == 6 && h >= i && (v = 10), c++;
      }
      d += "</div>";
    }
    (d += "</div>"),
      (document.querySelector('[data-render="month-year"]').innerHTML = s),
      (document.querySelector(this.divId).innerHTML = d),
      document
        .querySelector(this.divId)
        .setAttribute("data-date", this.Months[e] + " - " + t),
      document.querySelector(this.divId).setAttribute("data-month", e);
  }),
  (window.onload = function () {
    var t = new Calendar({
      RenderID: ".render-a",
      Format: "M",
    });
    t.showCurrent(), t.checkActive();
    var e = document.querySelectorAll(".header [data-action]");
    for (i = 0; i < e.length; i++)
      e[i].onclick = function () {
        if (
          (document
            .querySelector(".calendara .header")
            .setAttribute("class", "header"),
          "true" ==
            document.querySelector(".months").getAttribute("data-loading"))
        )
          return (
            document
              .querySelector(".calendara .header")
              .setAttribute("class", "header active"),
            !1
          );
        var e;
        document.querySelector(".months").setAttribute("data-loading", "true"),
          this.getAttribute("data-action").includes("prev")
            ? (t.prevMonth(), (e = "left"))
            : (t.nextMonth(), (e = "right")),
          t.checkActive(),
          document.querySelector(".months").setAttribute("data-flow", e),
          document
            .querySelector('.month[data-active="true"]')
            .addEventListener("webkitTransitionEnd", function () {
              document.querySelector(".months").removeAttribute("data-loading");
            }),
          document
            .querySelector('.month[data-active="true"]')
            .addEventListener("transitionend", function () {
              document.querySelector(".months").removeAttribute("data-loading");
            });
      };
  });
