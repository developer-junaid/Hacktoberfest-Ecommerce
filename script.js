const closeBtn = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".hamburger-icon");

closeBtn.addEventListener("click", () => {
  sideBar.style.width = "0%";
  closeBtn.style.display = "none";
});

menuBtn.addEventListener("click", () => {
    sideBar.style.width = "17rem";
    closeBtn.style.display = "block";
  });
