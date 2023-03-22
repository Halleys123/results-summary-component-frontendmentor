const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: "hsl(0, 100%, 67%)",
    bColor: "hsl(0, 100%, 67%, 0.05)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: "hsl(39, 100%, 56%)",
    bColor: "hsl(39, 100%, 56%, 0.05)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "hsl(166, 100%, 37%)",
    bColor: "hsl(166, 100%, 37%, 0.05)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: "hsl(234, 85%, 45%)",
    bColor: "hsl(234, 85%, 45%, 0.05)",
  },
];

const totalItems = data.length;
console.log(data);
for (let i = 0; i < totalItems; i++) {
  const html = `<div class="card" style = "background-color: ${data[i].bColor}">
  <div class="rightCardHead">
    <img
      src="${data[i].icon}"
      alt="Image"
      class="dataImg"
    />
    <p class="rightText" style = "color: ${data[i].color}">${data[i].category}</p>
  </div>
  <div class="rightMarks">
    <p class="rightScore">${data[i].score}</p>
    <p class="rightMaxScore">/ 100</p>
  </div>
</div>
</div>`;
  document.querySelector(".details").insertAdjacentHTML("beforeend", html);
}
