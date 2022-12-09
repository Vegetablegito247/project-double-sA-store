let user = document.querySelector('.user');
let pop = document.querySelector('.pop-modal');
let userPop = document.querySelector('.user-pop-dn');
let faDn = document.querySelector('.user .fa-chevron-down');
let help = document.querySelector('.help');
let pop2 = document.querySelector('.pop-modal2');
let userPop2 = document.querySelector('.user-pop-dn2');
let faDn2 = document.querySelector('.help .fa-chevron-down');

user.addEventListener('click', () => {
    pop.style.display = 'block';
    userPop.style.display = 'block';
    faDn.className = 'fa-solid fa-chevron-up';

    pop.addEventListener('click', () => {
        pop.style.display = 'none';
        userPop.style.display = 'none';
        faDn.className = 'fa-solid fa-chevron-down';
    });
});

help.addEventListener('click', () => {
    pop2.style.display = 'block';
    userPop2.style.display = 'block';
    faDn2.className = 'fa-solid fa-chevron-up';

    pop2.addEventListener('click', () => {
        pop2.style.display = 'none';
        userPop2.style.display = 'none';
        faDn2.className = 'fa-solid fa-chevron-down';
    });
});