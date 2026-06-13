// !===scroll position====================================
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
// console.log(navLinks);
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }

  if (window.scrollY <= 644) {
    navLinks[0].classList.add("active");
  } else if (window.scrollY <= 1772) {
    navLinks[1].classList.add("active");
  } else if (window.scrollY <= 2767) {
    navLinks[2].classList.add("active");
  } else if (window.scrollY <= 4934) {
    navLinks[3].classList.add("active");
  } else if (window.scrollY <= 7049) {
    navLinks[4].classList.add("active");
  } else {
    navLinks[5].classList.add("active");
  }
});

//!====Dark and Light =============================
let btnDarkMode = document.getElementById("theme-toggle-button");
btnDarkMode.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark");
});
//!====scroll to top =============================
document.querySelector(".btn-scroll-up").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    document.querySelector(".btn-scroll-up").classList.remove("d-none");
  } else {
    document.querySelector(".btn-scroll-up").classList.add("d-none");
  }
});

//!===Testimonial==============================
let portfolioFilter = Array.from(
  document.querySelectorAll(".portfolio-filter"),
);
let portfolioItems = Array.from(document.querySelectorAll(".portfolio-item"));
let portfolioGrid = document.getElementById("portfolio-grid");
for (let i = 0; i < portfolioFilter.length; i++) {
  portfolioFilter[i].addEventListener("click", function (e) {
    for (let j = 0; j < portfolioFilter.length; j++) {
      portfolioFilter[j].classList.remove("active");
    }
    this.classList.add("active");
    // console.log(e.target.classList.contains('elect-store'));
    //&------
    if (e.target.classList.contains("all")) {
      for (let k = 0; k < portfolioItems.length; k++) {
        portfolioItems[k].classList.remove("d-none");
      }
    }
    //&------
    if (e.target.classList.contains("web-site")) {
      for (let k = 0; k < portfolioItems.length; k++) {
        portfolioItems[k].classList.remove("d-none");
        if (!portfolioItems[k].classList.contains("web-site")) {
          portfolioItems[k].classList.add("d-none");
        }
      }
    }
    //&------
    if (e.target.classList.contains("design-filter")) {
      for (let k = 0; k < portfolioItems.length; k++) {
        portfolioItems[k].classList.remove("d-none");
        if (!portfolioItems[k].classList.contains("design-filter")) {
          portfolioItems[k].classList.add("d-none");
        }
      }
    }
    //&------
    if (e.target.classList.contains("app-filter")) {
      for (let k = 0; k < portfolioItems.length; k++) {
        portfolioItems[k].classList.remove("d-none");
        if (!portfolioItems[k].classList.contains("app-filter")) {
          portfolioItems[k].classList.add("d-none");
        }
      }
    }

    //&------
    if (e.target.classList.contains("elect-store")) {
      for (let k = 0; k < portfolioItems.length; k++) {
        portfolioItems[k].classList.remove("d-none");
        if (!portfolioItems[k].classList.contains("elect-store")) {
          portfolioItems[k].classList.add("d-none");
        }
      }
    }
  });
}
// !=====Sidebar ============================
const settingsSidebar = document.querySelector(".settings-sidebar");
const settingsToggle = document.querySelector("#settings-toggle");
const closeSettings = document.querySelector("#close-settings");
const fontOption = Array.from(document.querySelectorAll(".font-option"));
const themeColors = Array.from(document.querySelectorAll(".theme-colors span"));
const textPrimary = document.querySelectorAll(".text-secondary");
const textTransparent = document.querySelectorAll(".text-transparent");
// console.log(color);

closeSettings.addEventListener("click", function (e) {
  closeSettingBar();
});
settingsToggle.addEventListener("click", function (e) {
  openSettingBar();
});
function closeSettingBar() {
  // console.log("hello");
  settingsSidebar.style.transform = "translateX(320px)";
  settingsToggle.style.transform = "translateX(320px)";
}
function openSettingBar() {
  // console.log("hello");
  settingsSidebar.style.transform = "translateX(0)";

  setTimeout(() => {
    settingsToggle.style.transform = "translateX(0px)";
  }, 500);
}
for (let i = 0; i < fontOption.length; i++) {
  fontOption[i].addEventListener("click", function (e) {
    for (let j = 0; j < fontOption.length; j++) {
      fontOption[j].style.border = "1px solid transparent";
    }
    // console.log(fontOption[i].getAttribute("data-font"));
    fontOption[i].style.border = `1px solid ${color}`;
    let dataFont = this.getAttribute("data-font");
    document.body.style.fontFamily = `${dataFont}, sans-serif`;
  });
}

let color = "#6366f1";
for (let i = 0; i < themeColors.length; i++) {
  themeColors[i].addEventListener("click", function (e) {
    color = this.getAttribute("color-value");
    //& New Info ☠️
    document.documentElement.style.setProperty("--color-primary", color);
    document.documentElement.style.setProperty("--color-secondary", color);
    document.documentElement.style.setProperty("--color-accent", color);
  });
}
document
  .getElementById("reset-settings")
  .addEventListener("click", function (e) {
    document.documentElement.style.setProperty("--color-primary", "#6366f1");
    document.documentElement.style.setProperty("--color-secondary", "#6366f1");
    document.documentElement.style.setProperty("--color-accent", "#6366f1");
  });
//!=====Carousel ==================================
const cards = Array.from(document.querySelectorAll(".testimonial-card"));
// console.log(cards[0].offsetWidth);
// console.log(cards.length);
const carousel = document.getElementById("testimonials-carousel");

let currentIndex = 0;

document
  .getElementById("next-testimonial")
  .addEventListener("click", function () {
    currentIndex++;
    // console.log(currentIndex);
    if (currentIndex > cards.length - 4) {
      currentIndex = 0;
    }
    carousel.style.transform = `translateX(+${currentIndex * 33.333}%)`;
  });
document
  .getElementById("prev-testimonial")
  .addEventListener("click", function () {
    currentIndex--;
    // console.log(currentIndex,`${currentIndex * 33.333}%`);
    // console.log(currentIndex);
    if (currentIndex < 0) {
      currentIndex = cards.length - 4;
    }

    carousel.style.transform = `translateX(+${currentIndex * 33.333}%)`;
  });
