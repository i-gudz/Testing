let button = document.getElementsByClassName('btn_partners'),
    tabContent = document.getElementsByClassName('info');
button[0].classList.add('active');
    
    tabContent[0].style.display = 'block';

function tabs(e, tab) {
    let i;
    for (i = 0; i < button.length; i++) {
        tabContent[i].style.display = 'none';
        button[i].classList.remove('active');
    }
    document.getElementById(tab).style.display = 'block';
    e.currentTarget.classList.add('active');
}

let selectTeam = document.getElementsByClassName('team')
    selectTeam[0].classList.add('active');
let sliderTeam = document.getElementsByClassName('swiper')
    sliderTeam[0].style.display = 'block';

function team(e, numberTeam) {
    let i;
    for (i = 0; i < selectTeam.length; i++) {
        sliderTeam[i].style.display = 'none';
        selectTeam[i].classList.remove('active');
    }
    document.getElementById(numberTeam).style.display = 'block';
    e.currentTarget.classList.add('active');
}




