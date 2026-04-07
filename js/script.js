if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input[type='checkbox']").on("change", function () {
    $("body").toggleClass("blue");
});

const destinationSearch = document.getElementById("destination-search");

function filterDestinations() {
    const query = destinationSearch.value.trim().toLowerCase();
    document.querySelectorAll(".events .card").forEach((card) => {
        const matches = card.innerText.toLowerCase().includes(query);
        card.style.display = matches ? "flex" : "none";
    });
}

if (destinationSearch) {
    destinationSearch.addEventListener("input", filterDestinations);
}

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
        ? localStorage.setItem("tourism_website_darkmode", true)
        : localStorage.setItem("tourism_website_darkmode", false);
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Rotate the header quote for a fresh travel message
const headerQuotes = [
    "Explore the colourful World",
    "Pack your bag for the next adventure",
    "Discover hidden places and unforgettable journeys",
    "Travel far, collect stories, and return inspired",
];
let quoteIndex = 0;
const quoteElement = document.getElementById("quote");

function rotateHeaderQuote() {
    if (!quoteElement) return;
    quoteElement.textContent = headerQuotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % headerQuotes.length;
}

rotateHeaderQuote();
setInterval(rotateHeaderQuote, 4000);

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
    const screenWidth = window.screen.width;
    const threshold = screenWidth <= 425 ? 1300 : screenWidth <= 768 ? 1250 : 1000;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= threshold) {
            navLinks.forEach((navLink) => navLink.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNav);
