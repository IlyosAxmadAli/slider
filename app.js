let slider = document.querySelector(".slider");
let active = document.querySelector("#active");
let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let line4 = document.querySelector("#line4");
let container = document.querySelector(".container");

line1.addEventListener("click", () => {
  slider.style.transform = "translateX(0)";
  active.style.top = 0;
  container.style.background = "#b8c91d";
});

line2.addEventListener("click", () => {
  slider.style.transform = "translateX(-25%)";
  active.style.top = "80px";
  container.style.background = "#195bd7";
});

line3.addEventListener("click", () => {
  slider.style.transform = "translateX(-50%)";
  active.style.top = "160px";
  container.style.background = "#19d762";
});

line4.addEventListener("click", () => {
  slider.style.transform = "translateX(-75%)";
  active.style.top = "240px";
  container.style.background = "#195bd7";
});
