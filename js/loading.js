document.addEventListener("DOMContentLoaded", function() {
    const loadingPage = document.getElementById("loading-page");
    // const mainContent = document.getElementById("main-asli");
    const maskot = document.getElementById("maskot");
    const overlay = document.querySelector('.overlay');
    const loadingStext = document.getElementById('loading-text-overlay')

    
    document.body.classList.add("noscroll");
    // Fade in maskot and show loading animation
    setTimeout(() => {
        maskot.style.opacity = "1";
        overlay.classList.add("slide-up");
    }, 500);

    // Simulate loading delay
    setTimeout(() => {
        // Geser overlay ke atas
        loadingPage.classList.add("slide-up")
        loadingStext.classList.add('hidden')
        maskot.classList.add('scale-110')
        overlay.classList.add('hidden')
        // Show main content
        // try{
        //     mainContent.classList.remove("hidden");
        //     mainContent.style.opacity = "1";

        // }catch(e){}

        // Hapus layar loading setelah transisi overlay selesai
        setTimeout(() => {
            loadingPage.style.display = "none";
            loadingPage.classList.add('hidden')
            document.body.classList.remove("noscroll");
        }, 1000); // Waktu untuk transisi overlay ke atas
    }, 2000); // 3 detik delay loading page

    // Add page transition on page navigation
    window.addEventListener("beforeunload", function() {
        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = "0";
    });
});
