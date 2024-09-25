document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    console.log(navigator.userAgent)
    if (navigator.userAgent.includes("Firefox")) {
        body.classList.add('dark:background_noise_dark_firefox');
        console.log("Clase 'dark:background_noise_dark_firefox' añadida.");
    } else {
        body.classList.add('dark:background_noise_dark');
    }
});