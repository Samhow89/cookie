let cookies = 0;
let employees = 0;

let addCookie = document.querySelector(".addCookie");
let cookieCount = document.querySelector(".cookieCount");
let addEmployee = document.querySelector(".addEmployee");

function updateCookies () {
    cookieCount.innerHTML = "Cookies: " + cookies;
}

addCookie.addEventListener('click', () =>{
    cookies++
    console.log(cookies);
    updateCookies();
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


