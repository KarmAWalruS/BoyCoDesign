const cards = {
  gallery__fantsy: document.getElementById("gallery_Fantasy"),
  gallery__interior: document.getElementById("gallery_Interior"),
  gallery__furniture: document.getElementById("gallery_Furniture"),
};

$(window).on("load resize", function () {
  if ($(window).width() <= 1199) {
    $(".break").remove();
    $('<div class="break"></div>').insertAfter(".Kompas");
    $('<div class="break"></div>').insertAfter(".Corona");
    $('<div class="break"></div>').insertAfter(".Substance");
  } else {
    $(".break").remove();
    $('<div class="break"></div>').insertAfter(".Marvelous");
    $('<div class="break"></div>').insertAfter(".Substance");
  }
});

$(window).on("load resize", function () {
  if ($(window).width() <= 1199) {
    $("#my_img").attr("src", "/img/self1199px.png");
  } else {
    $("#my_img").attr("src", "/img/self.png");
  }
});

$(window).on("load resize", function () {
  if ($(window).width() <= 768) {
    $(".break").remove();
    $('<div class="break"></div>').insertAfter(".Autocad");
    $('<div class="break"></div>').insertAfter(".Kompas");
    $('<div class="break"></div>').insertAfter(".Marvelous");
    $('<div class="break"></div>').insertAfter(".Corona");
    $('<div class="break"></div>').insertAfter(".Photoshop");
    $('<div class="break"></div>').insertAfter(".Substance");
    $('<div class="break"></div>').insertAfter(".3ds");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list"),
    hamburger = document.querySelector(".hamburger");
  logo = document.querySelector(".first-section__logo");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    menu.classList.toggle("nav-menu_active");
    logo.classList.toggle("logo-unactive");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

function togglePopupFantasy() {
  if (cards.gallery__fantsy.classList.contains("overlay__hidden")) {
    cards.gallery__fantsy.classList.remove("overlay__hidden");
  } else {
    cards.gallery__fantsy.classList.add("overlay__hidden");
  }
}

function togglePopupFurniture() {
  if (cards.gallery__furniture.classList.contains("overlay__hidden")) {
    cards.gallery__furniture.classList.remove("overlay__hidden");
  } else {
    cards.gallery__furniture.classList.add("overlay__hidden");
  }
}

function togglePopupInterior() {
  if (cards.gallery__interior.classList.contains("overlay__hidden")) {
    cards.gallery__interior.classList.remove("overlay__hidden");
  } else {
    cards.gallery__interior.classList.add("overlay__hidden");
  }
}

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}
