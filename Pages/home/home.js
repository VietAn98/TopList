function login() {
  let register = document.getElementById("btnregister");
  let btnlogin = document.getElementById("btnlogin");
  let currentuser = document.getElementById("current-user");

  if (register && btnlogin && currentuser) {
    document.getElementById("btnregister").style.display = "none";
    document.getElementById("btnlogin").style.display = "none";
    document.getElementById("current-user").style.display = "flex";
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

var i = 0;
function onClickCategories() {
  i = i += 1;
  if (i % 2 === 0) {
    //down
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

var p = 0;
function onClickLanguage() {
  p = p += 1;
  if (p % 2 === 0) {
    document.getElementById("list-language").style.display = "none";
    document.getElementById("language-fa-chevron-up").style.display = "none";
    document.getElementById("language-fa-chevron-down").style.display = "block";
  } else {
    document.getElementById("list-language").style.display = "block";
    document.getElementById("language-fa-chevron-up").style.display = "block";
    document.getElementById("language-fa-chevron-down").style.display = "none";
  }
}

var k = 0;
function onClickUserInfo() {
  k = k += 1;
  if (k % 2 === 0) {
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

function toLoginPage() {
  location.assign("./login-mobile.html");
}
