function myNavDroDn() {
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
};

myNavDroDn();

function myCountDown () {
    let time = document.querySelector('.time');
    let h4 = document.createElement('h4');
    time.appendChild(h4);

    setInterval(() => {
        let currentDay = new Date();
        let countDownDay = new Date('December 25 2022');
        let diff = countDownDay - currentDay;
        // // days left
        // let countDay = Math.floor(diff / 1000 / 24 / 60 / 60);
        // hours left 
        let countHour = Math.floor(diff / 1000 / 60 / 60) % 24;
        // minutes left 
        let countMinute = Math.floor(diff / 1000 / 60) % 60;
        //  seconds left
        let countSecond = Math.floor(diff / 1000) % 60;
        h4.innerHTML = `Time Left:  ${countHour}hrs ${countMinute}mins
        ${countSecond}secs`;
    }, 1000);
};

myCountDown();

let elec = document.querySelector('.electronic')
let prdctv = document.querySelector('.products-view');
let prot1 = document.querySelector('.prot1');
prot1.addEventListener('click', () => {
    elec.style.display ='none';
    prdctv.innerHTML = `<div class="choice">
    <div class="pItem">
        <img src="./Electronics/Systems/hp-gaming/hp-gaming-1.jpg" alt="" class="shoe">
    </div>

    <div class="pCompany">
        <div class="pCHead">
            <h4>HP</h4>
            <h1>Core i7 16gb RAM 576 ROM <br> HP gaming system</h1>
        </div>

        <div class="pCDetails">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat odit velit cum possimus molestias
            maiores nam eos culpa! Est, ea ipsam! Architecto cum unde velit repudiandae ex tempore. Eum.
            </p>
        </div>

        <div class="pCPrice">
            <h3>$1,114.00</h3>
            <h5>80%</h5>
        </div>

        <div class="canceled">
            <h5>$1,392.00</h5>
        </div>

        <div class="btns">
            <div class="addCart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Add to cart</p>
            </div>
            <div class="buyNow">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Buy now</p>
            </div>
        </div>
    </div>
</div>`
    prdctv.style.display ='block';
});

let prot2 = document.querySelector('.prot2');
prot2.addEventListener('click', () => {
    elec.style.display ='none';
    prdctv.innerHTML = `<div class="choice">
    <div class="pItem">
        <img src="./Electronics/Cables/multi-magnetic-charger.jpg" alt="" class="shoe">
    </div>

    <div class="pCompany">
        <div class="pCHead">
            <h4>Multi magnetic charger</h4>
            <h1>Magnetic charger for <br> all type of phones</h1>
        </div>

        <div class="pCDetails">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat odit velit cum possimus molestias
            maiores nam eos culpa! Est, ea ipsam! Architecto cum unde velit repudiandae ex tempore. Eum.
            </p>
        </div>

        <div class="pCPrice">
            <h3>$264.00</h3>
            <h5>80%</h5>
        </div>

        <div class="canceled">
            <h5>$1,392.00</h5>
        </div>

        <div class="btns">
            <div class="addCart">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Add to cart</p>
            </div>
            <div class="buyNow">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Buy now</p>
            </div>
        </div>
    </div>
</div>`
    prdctv.style.display ='block';
});