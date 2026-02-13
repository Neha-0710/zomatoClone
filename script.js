// Animate Hero Section on Load
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero h1");
    const heroText = document.querySelector(".hero p");

    heroTitle.style.opacity = 0;
    heroText.style.opacity = 0;
    heroTitle.style.transform = "translateY(-40px)";
    heroText.style.transform = "translateY(40px)";

    setTimeout(() => {
        heroTitle.style.transition = "all 1s ease";
        heroText.style.transition = "all 1s ease 0.3s";
        heroTitle.style.opacity = 1;
        heroText.style.opacity = 1;
        heroTitle.style.transform = "translateY(0)";
        heroText.style.transform = "translateY(0)";
    }, 200);
});

// Search box glow effect
const searchBox = document.querySelector(".hero input");
searchBox.addEventListener("focus", () => {
    searchBox.style.boxShadow = "0 0 12px rgba(226,55,68,0.9)";
});
searchBox.addEventListener("blur", () => {
    searchBox.style.boxShadow = "none";
});

// Button click animation
const orderBtn = document.querySelector(".hero button");
orderBtn.addEventListener("click", () => {
    orderBtn.style.transform = "scale(0.92)";
    setTimeout(() => {
        orderBtn.style.transform = "scale(1)";
    }, 150);

    alert("🍕 Redirecting to restaurants near you...");
});
