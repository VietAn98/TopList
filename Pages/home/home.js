function login() {
  document.getElementById("btnregister").style.display = "none";
  document.getElementById("btnlogin").style.display = "none";
  document.getElementById("current-user").style.display = "flex";
}

function logout() {
  document.getElementById("btnregister").style.display = "block";
  document.getElementById("btnlogin").style.display = "block";
  document.getElementById("current-user").style.display = "none";
}

function openNav() {
  document.getElementById("sideNavigate").style.width = "100%";
}

function closeNav() {
  document.getElementById("sideNavigate").style.width = "0";
}
