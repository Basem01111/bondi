/* Start Navbar*/
//Element
let navLists = document.querySelectorAll(".navbar ul li a"),
    navUl = document.querySelector(".navbar ul"),
    landing = document.querySelector(".landing"),
    sections = document.querySelectorAll("section"),
    footer = document.querySelector(".footer"),
    navbar = document.querySelector(".navbar");

//Onclick Nav
navUl.onclick = function (e) {
    navLists.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
};

//The color of the navbar changes when making a scroll
window.addEventListener("scroll", () => {
    if (window.scrollY >= landing.scrollHeight) {
        navbar.style.backgroundColor = "rgb(25 40 63 / 60%)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});

//Scroll And Active Nav
sections.forEach(function (s) {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= s.offsetTop) {
            navLists.forEach((n) => {
                if (`#${s.getAttribute("id")}` == n.getAttribute("href")) {
                    navLists.forEach((l) => l.classList.remove("active"));
                    n.classList.add("active");
                }
            });
        }
    });
});
window.addEventListener("scroll", () => {
    if (window.scrollY >= footer.offsetTop - 340) {
        navLists.forEach((l) => l.classList.remove("active"));
        navLists.forEach((l) =>
            l.getAttribute("href") == `#${footer.getAttribute("id")}`
                ? l.classList.add("active")
                : ""
        );
    }
});
/* End Navbar*/

/* Start Btn Ub*/
//Element
var btnUp = document.querySelector(".btn-up");

window.addEventListener("scroll", () =>
    window.scrollY >= landing.scrollHeight
        ? btnUp.classList.add("show")
        : btnUp.classList.remove("show")
);

btnUp.onclick = () =>
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
/* End Btn Ub*/

/* Start Our Work*/
//Element
let lists = document.querySelectorAll(".our-work ul li"),
    imgs = document.querySelectorAll(".our-work .all"),
    ourWork = document.querySelector(".our-work"),
    togglerWork = false,
    workBoxes = document.querySelectorAll(".our-work .box");

//Create Event
lists.forEach((li) =>
    li.addEventListener("click", function () {
        //Remove Active
        lists.forEach((li) => li.classList.remove("active"));
        // Add Active
        this.classList.add("active");
        // Remove Imgs
        imgs.forEach((img) => (img.style.display = "none"));
        // Add Imgs
        document
            .querySelectorAll(this.getAttribute("data-work"))
            .forEach((img) => (img.style.display = "block"));
    })
);

//slace Box
workBoxes.forEach((b) => {
    b.addEventListener("click", () => {
        workBoxes.forEach((box) => box.classList.remove("box-show"));
        togglerWork === false ? (togglerWork = true) : (togglerWork = false);
        togglerWork
            ? b.classList.add("box-show")
            : b.classList.remove("box-show");
    });
});
/* End Our Work*/

/* Start Our Team*/
//Element
let teamBoxes = document.querySelectorAll(".team .box");

//Hover Box
teamBoxes.forEach(
    (box) =>
        (box.onmouseover = function () {
            //Add Active
            this.classList.add("active");
            //Add Dont-Active
            teamBoxes.forEach((box) =>
                !box.classList.contains("active")
                    ? box.classList.add("dont-active")
                    : ""
            );
            this.onmouseout = function () {
                //Remove Active
                this.classList.remove("active");
                // remove Dont-active
                teamBoxes.forEach((box) => box.classList.remove("dont-active"));
            };
        })
);
/* End Our Team*/
