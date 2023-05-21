let cookies = 0;
let employees = 0;
let cash = 0;
let cookiePrice = 0.25;

let addCookie = document.querySelector(".addCookie");
let cookieCount = document.querySelector(".cookieCount");
let addEmployee = document.querySelector(".addEmployee");
let cookieImage = document.querySelector(".cookieImage");
let money = document.querySelector(".money");
let sellAll = document.querySelector(".sellAll");



function updateCookies () {
    cookieCount.innerHTML = "Cookies: " + cookies;
}

function updateMoney () {
    money.innerHTML = "Cash: £" + cash;
}

function cookieFallAnimation() {
    const cookieImage = new Image();
    cookieImage.src = "cookie.png";
    cookieImage.classList.add("cookieImage");
    document.body.appendChild(cookieImage);

    const screenWidth = window.innerWidth;
    const randomX = Math.floor(Math.random() * (screenWidth - 100));

    cookieImage.style.cssText = `
        left: ${randomX}px;
        top: -100px;
        transition: top 1s, opacity 0.5s;
    `;

    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const cookieFallDistance = viewportHeight - 100;
    const fadeOutStart = cookieFallDistance * 0.9;

    setTimeout(() => {
        cookieImage.style.top = `${cookieFallDistance}px`;
        setTimeout(() => {
            cookieImage.style.opacity = 0;
            cookieImage.addEventListener('transitionend', () => {
                cookieImage.remove();
            }, { once: true });
        }, fadeOutStart);
    }, 10);
}




addCookie.addEventListener('click', () =>{
    cookies++
    console.log(cookies);
    updateCookies();
    cookieFallAnimation();
});

addEmployee.addEventListener('click', () =>{
    if (cookies >= 10) {
        cookies = cookies - 10;
        employees++
        addEmployee.innerHTML = "Hire employee for 10 cookies!<br>Employees : " + employees;
        updateCookies();
    }
});

sellAll.addEventListener('click', () => {
    cash = cookies * cookiePrice
    cookies = 0
    updateCookies();
    updateMoney();

});



setInterval(() => {
    if (employees > 0) {
        for (let i = 0; i < employees; i++) {
            setTimeout(() => {
                cookies += 1;
                updateCookies();
                cookieFallAnimation();
            }, i *200); // Adjust the time gap here (in milliseconds)
        }
    }
}, 5000);




