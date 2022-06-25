let button = document.getElementsByClassName("btn_partners"),
    tabContent = document.getElementsByClassName("info");

function tabs(b, c) {
    let a;
    for (a = 0; a < button.length; a++) tabContent[a].style.display = "none", button[a].classList.remove("active");
    document.getElementById(c).style.display = "block", b.currentTarget.classList.add("active")
}
button[0].classList.add("active"), tabContent[0].style.display = "block";
let selectTeam = document.getElementsByClassName("team");
selectTeam[0].classList.add("active");
let sliderTeam = document.getElementsByClassName("swiper");

function team(b, c) {
    let a;
    for (a = 0; a < selectTeam.length; a++) sliderTeam[a].style.display = "none", selectTeam[a].classList.remove("active");
    document.getElementById(c).style.display = "block", b.currentTarget.classList.add("active")
}
sliderTeam[0].style.display = "block"