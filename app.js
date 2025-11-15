document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("offcanvas-menu").classList.add("show");
});

document.getElementById("menu-close").addEventListener("click", function () {
  document.getElementById("offcanvas-menu").classList.remove("show");
});



function renderCards(data, className = ".cards-container") {
  const container = document.querySelector(className);
  if (!container) {
    console.error(`Container .${className} not found`);
    return;
  }

  if (!Array.isArray(data) || data.length === 0) {
    container.innerHTML = `<p class="empty">Akhono koray nai 🙂</p>`;
    return;
  }

  container.innerHTML = ""; // reset

  data.forEach((card) => {
    const { date = "N/A", serial = "-", link = "#", topics = [] } = card;

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const topicsList = Array.isArray(topics)
      ? topics.map((t) => `<li class="topic">${t}</li>`).join("")
      : "";

    cardElement.innerHTML = `
      <div class="card-header">
        <div class="date">${date}</div>
        <div class="serial">${serial}</div>
      </div>
      <div class="topics">
        <div class="topics-title">Practicals Covered:</div>
        <ul class="topics-list">${topicsList}</ul>
      </div>
      <a href="${link}" class="btn" target="_blank">
        <i>📸</i> View Notes Photos
      </a>
    `;

    container.appendChild(cardElement);
  });
}




const btnPaper1 = document.getElementById("btn-paper1");
const btnPaper2 = document.getElementById("btn-paper2");
const paper1 = document.getElementById("paper1");
const paper2 = document.getElementById("paper2");

btnPaper1.addEventListener("click", () => {
  btnPaper1.classList.add("active");
  btnPaper2.classList.remove("active");
  paper1.classList.add("active");
  paper2.classList.remove("active");
});

btnPaper2.addEventListener("click", () => {
  btnPaper2.classList.add("active");
  btnPaper1.classList.remove("active");
  paper2.classList.add("active");
  paper1.classList.remove("active");
});
