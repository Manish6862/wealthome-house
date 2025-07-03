let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("fa-xmark");
  navlist.classList.remove("open");
};

  window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });




  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  video1.addEventListener("mouseenter", () => {
    video1.style.flexGrow = "1";
    video2.style.flexGrow = "0";
    video3.style.flexGrow = "0";
  });

  video2.addEventListener("mouseenter", () => {
    video1.style.flexGrow = "0";
    video2.style.flexGrow = "1";
    video3.style.flexGrow = "0";
  });

  video3.addEventListener("mouseenter", () => {
    video1.style.flexGrow = "0";
    video2.style.flexGrow = "0";
    video3.style.flexGrow = "1";
  });

  // Optional: reset on mouse leave
  document.querySelector(".house-video").addEventListener("mouseleave", () => {
    video1.style.flexGrow = "0";
    video2.style.flexGrow = "1"; // back to default
    video3.style.flexGrow = "0";
  });


