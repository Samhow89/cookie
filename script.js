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
    cookieImage.style.top = "100vh"; // Moves the cookie image to the bottom of the screen
    setTimeout(() => {
        cookieImage.style.display = "none"; // Hide the cookie image
        setTimeout(() => {
            cookieImage.style.display = "block"; // Show the cookie image
            cookieImage.style.top = "-100px"; // Resets the position of the cookie image to the top
        }, 100);
    }, 1000); // Wait for 1 second before resetting the position
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
        cookies += employees;
        updateCookies();
    }
}, 5000);


