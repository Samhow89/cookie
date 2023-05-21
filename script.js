let cookies = 0;
let employees = 0;

let addCookie = document.querySelector(".addCookie");
let cookieCount = document.querySelector(".cookieCount");
let addEmployee = document.querySelector(".addEmployee");
let cookieImage = document.querySelector(".cookieImage");



function updateCookies () {
    cookieCount.innerHTML = "Cookies: " + cookies;
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
        transition: top 1s;
    `;

    setTimeout(() => {
        cookieImage.style.top = "100vh";
        cookieImage.addEventListener('transitionend', () => {
            cookieImage.remove();
        }, { once: true });
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



setInterval(() => {
    if (employees > 0) {
        for (let i = 0; i < employees; i++) {
            setTimeout(() => {
                cookies += 1;
                updateCookies();
                cookieFallAnimation();
            }, i *500); // Adjust the time gap here (in milliseconds)
        }
    }
}, 5000);




