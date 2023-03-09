const anchors = document.querySelectorAll('a[href*="#"]');

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
