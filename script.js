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
    const cookieImage = document.createElement("img");
    cookieImage.src = "cookie.png";
    cookieImage.className = "cookieImage";
    document.body.appendChild(cookieImage);

    cookieImage.style.top = "-100px"; // Initial position outside the screen

    setTimeout(() => {
        cookieImage.style.top = "100vh"; // Moves the cookie image to the bottom of the screen
        setTimeout(() => {
            cookieImage.remove(); // Remove the cookie image from the DOM after it falls
        }, 1000); // Wait for 1 second before removing
    }, 10); // Start animation immediately
}

addCookie.addEventListener('click', () => {
    cookies++;
    console.log(cookies);
    updateCookies();
    cookieFallAnimation();
});

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
        cookies += employees;
        updateCookies();
    }
}, 5000);


