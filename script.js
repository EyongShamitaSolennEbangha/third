


let btnContainer = document.getElementById("myDIV");
let grid12s = btnContainer.getElementsByClassName("grid12");

for (let i = 0; i < grid12s.length; i++) {
  grid12s[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let dayContainer = document.getElementById("days");
let day = dayContainer.getElementsByTagName("div");

for(let i = 0; i < day.length; i++){
    day[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("activex");
        current[0].className = current[0].className.replace("activex", "");
        this.className += "activex";
    });
}

