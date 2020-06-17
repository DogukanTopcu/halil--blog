var darkDurum = 0
function ourFunction() {
  if (darkDurum == 0) {
    document.body.style.backgroundColor = "#2B2C2B";
    document.body.style.color = "#ffffff";
    darkDurum = 1;
    document.getElementById("entrie").style.backgroundColor = "black"
    document.getElementById("entrie1").style.backgroundColor = "black"
    document.getElementById("entrie2").style.backgroundColor = "black"
    document.getElementById("entrie3").style.backgroundColor = "black"
    document.getElementById("entrie4").style.backgroundColor = "black"
    document.querySelector("#mySidebar").style.backgroundColor = "black"
    document.getElementById("header").style.backgroundColor = "#2B2C2B"
  }else {
    document.getElementById("entrie").style.backgroundColor = "white"
    document.getElementById("entrie1").style.backgroundColor = "white"
    document.getElementById("entrie2").style.backgroundColor = "white"
    document.getElementById("entrie3").style.backgroundColor = "white"
    document.getElementById("entrie4").style.backgroundColor = "white"
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000000";
    document.getElementById("header").style.backgroundColor = "white"
    document.querySelector("#mySidebar").style.backgroundColor = "white"
    darkDurum = 0;
  }
}


// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}