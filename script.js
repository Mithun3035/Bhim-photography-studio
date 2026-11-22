
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

// MOBILE NAVBAR

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.querySelector("i").className = "fa-solid fa-bars";

    });

});


// IMAGE GALLERY LIGHTBOX

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        lightboxImage.src = img.src;
        lightbox.classList.add("active");

    });

});


// CLOSE IMAGE

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


// ESCAPE KEY

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});
