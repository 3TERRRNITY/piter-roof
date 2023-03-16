const anchors = document.querySelectorAll('a[href*="#"]');
const toggleHeaders = document.querySelectorAll(".toggle-header");
const form = document.getElementById("excursion-form");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const filterExcursions = document.querySelectorAll(".box");

document.getElementById("excursions").addEventListener("click", (event) => {
  if (event.target.tagName !== "INPUT") return false;

  let filterClass = event.target.dataset["f"];

  filterExcursions.forEach((elem) => {
    elem.classList.remove("hide");
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("hide");
    }
  });
});

toggleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const toggleContent = header.nextElementSibling;

    header.querySelector(".toggle-icon").classList.toggle("fa-chevron-right");
    header.querySelector(".toggle-icon").classList.toggle("fa-chevron-down");

    if (toggleContent.style.display === "block") {
      toggleContent.style.display = "none";
    } else {
      toggleContent.style.display = "block";
    }
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const date = form.elements["date"].value;
  const category = form.elements["category"].value;
  const name = form.elements["name"].value;
  const phone = form.elements["phone"].value;
  console.log(
    `Дата: ${date}, Категория: ${category}, Имя: ${name}, Телефон: ${phone}`
  );
});
