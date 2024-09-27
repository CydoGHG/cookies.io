// Function to check if the cookie has already been set
function checkCookie() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        if (cookie.startsWith("cookiesAccepted=")) {
            return true;
        }
    }
    return false;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to show the cookie banner
function showCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    banner.style.display = "block";

    const acceptButton = document.getElementById("accept-cookies");
    acceptButton.addEventListener("click", function () {
        setCookie("cookiesAccepted", "true", 365);  // Cookie lasts for 1 year
        banner.style.display = "none";
    });
}

// Check if cookies have been accepted
window.onload = function () {
    if (!checkCookie()) {
        showCookieBanner();
    }
}
