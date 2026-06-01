const theme = {
  ink: "#143109",
  muted: "#59614c",
  paper: "#ffffff",
  bg: "#eef3dc",
  line: "#aaa77f",
  soft: "#d0d6b3",
  accent: "#f1bf98",
};

const humanScores = [
  ["WorldBench", 1187],
  ["MMT-Bench", 1158],
  ["MMBench", 1149],
  ["SEED-Bench-2", 1115],
  ["MME", 1071],
  ["VQAv2", 1039],
  ["MMStar", 896],
  ["MEGA-Bench", 842],
  ["MMMU", 542],
];

const embeddingRows = [
  { name: "WorldBench", siglip_er: 26.1, siglip_pr: 106.7, perception_er: 37.3, perception_pr: 152.1, dinov3_er: 450.9, dinov3_pr: 292.4 },
  { name: "MEGA-Bench", siglip_er: 22.2, siglip_pr: 84.0, perception_er: 32.2, perception_pr: 100.9, dinov3_er: 227.9, dinov3_pr: 130.3 },
  { name: "MMBench", siglip_er: 22.0, siglip_pr: 118.9, perception_er: 26.0, perception_pr: 102.3, dinov3_er: 432.6, dinov3_pr: 379.6 },
  { name: "MME", siglip_er: 24.0, siglip_pr: 50.6, perception_er: 29.2, perception_pr: 63.4, dinov3_er: 403.8, dinov3_pr: 240.8 },
  { name: "MMMU", siglip_er: 15.9, siglip_pr: 50.8, perception_er: 19.4, perception_pr: 58.2, dinov3_er: 94.0, dinov3_pr: 62.0 },
  { name: "MMStar", siglip_er: 22.2, siglip_pr: 68.8, perception_er: 27.8, perception_pr: 59.1, dinov3_er: 203.9, dinov3_pr: 101.2 },
  { name: "MMT-Bench", siglip_er: 24.7, siglip_pr: 99.8, perception_er: 33.4, perception_pr: 115.5, dinov3_er: 419.6, dinov3_pr: 322.1 },
  { name: "SEED-Bench-2", siglip_er: 23.7, siglip_pr: 57.7, perception_er: 36.5, perception_pr: 80.6, dinov3_er: 362.2, dinov3_pr: 222.6 },
  { name: "VQAv2", siglip_er: 23.5, siglip_pr: 99.8, perception_er: 26.3, perception_pr: 102.6, dinov3_er: 427.6, dinov3_pr: 334.2 },
];

const questions = [
  {
    key: "living",
    domain: "Living Things",
    color: "#fb737d",
    image: "assets/question_image_living.png",
    question: "How many mosquitoes are in the image?",
    options: { A: "0", B: "1", C: "2", D: "3" },
    answer: "B",
    choices: { "GPT-5.4-Thinking": "C", "Gemini-3.1-Pro": "B", "Qwen3.5-VL": "C", "Kimi-K2.5": "C" },
    reasoningModel: "GPT-5.4-Thinking (high)",
    predicted: "C",
    trace: `The model focuses on the two visible insects and initially treats both as mosquitoes. It identifies the large blood-engorged insect in the center and the smaller insect on the left, but fails to distinguish that the left insect is not a mosquito.\n\nExplanation: The model counts two mosquito-like insects and answers C, while the ground truth counts only one mosquito.\nAnswer: C`,
  },
  {
    key: "objects",
    domain: "Objects",
    color: "#fed185",
    image: "assets/question_image_objects.png",
    question: "What is beneath the shrimps inside the metal bucket?",
    options: { A: "Octopus", B: "More shrimps", C: "Ice", D: "Not possible to tell" },
    answer: "D",
    choices: { "GPT-5.4-Thinking": "C", "Gemini-3.1-Pro": "C", "Qwen3.5-VL": "C", "Kimi-K2.5": "C" },
    reasoningModel: "GPT-5.4-Thinking (high)",
    predicted: "C",
    trace: `The model assumes the white material under the shrimp is crushed ice because shrimp are commonly served on ice. It does not sufficiently distinguish visible evidence from a plausible prior.\n\nExplanation: The image does not make the contents under the shrimp visually certain, so the correct answer is that it is not possible to tell.\nAnswer: C`,
  },
  {
    key: "scenes",
    domain: "Scenes",
    color: "#ffe94e",
    image: "assets/question_image_scenes.png",
    question: "What item is clearly visible on the table closest to the viewer?",
    options: { A: "An open takeout box", B: "A notepad", C: "Scattered paper", D: "A computer" },
    answer: "A",
    choices: { "GPT-5.4-Thinking": "B", "Gemini-3.1-Pro": "A", "Qwen3.5-VL": "C", "Kimi-K2.5": "B" },
    reasoningModel: "Qwen3.5-VL-27B",
    predicted: "C",
    trace: `The model inspects the nearest table and describes the light objects on it as loose sheets of paper. This misses the box-like folded structure visible on the table closest to the viewer.\n\nExplanation: The nearest table contains an open takeout box, not a notepad, scattered paper, or a computer.\nAnswer: C`,
  },
  {
    key: "digital",
    domain: "Digital World",
    color: "#5a94ea",
    image: "assets/question_image_digital.png",
    question: "What is the symbol next to the recipient's name?",
    options: { A: "A search bar", B: "A heart", C: "A dropdown arrow", D: "A setting icon" },
    answer: "C",
    choices: { "GPT-5.4-Thinking": "C", "Gemini-3.1-Pro": "C", "Qwen3.5-VL": "C", "Kimi-K2.5": "B" },
    reasoningModel: "GPT-5.4-Thinking (high)",
    predicted: "B",
    trace: `The model notices an icon near the recipient line but over-associates it with a heart/favorite-contact symbol. The actual UI marker next to the recipient name is the small dropdown arrow.\n\nExplanation: The symbol next to the recipient's name is a dropdown arrow.\nAnswer: B`,
  },
  {
    key: "academics",
    domain: "Academics",
    color: "#73ad5c",
    image: "assets/question_image_academics.png",
    question: "What continent outline is clearly visible on the woodland circle in the image?",
    options: { A: "South America", B: "Europe", C: "Australia", D: "Africa" },
    answer: "C",
    choices: { "GPT-5.4-Thinking": "C", "Gemini-3.1-Pro": "C", "Qwen3.5-VL": "C", "Kimi-K2.5": "C" },
    reasoningModel: "GPT-5.4-Thinking (high)",
    predicted: "C",
    trace: `The model compares the visible outline against the answer choices and identifies the compact shape in the woodland circle as Australia.\n\nExplanation: The green woodland circle shows the distinctive silhouette of Australia.\nAnswer: C`,
  },
  {
    key: "dct",
    domain: "Documents, Charts, & Tables",
    color: "#a77dea",
    image: "assets/question_image_dct.png",
    question: "Which state and which year does this mortgage document indicate?",
    options: { A: "Missouri, 1873", B: "Missouri, 1872", C: "Mississippi, 1873", D: "Mississippi, 1872" },
    answer: "B",
    choices: { "GPT-5.4-Thinking": "A", "Gemini-3.1-Pro": "B", "Qwen3.5-VL": "A", "Kimi-K2.5": "B" },
    reasoningModel: "Gemini-3.1-Pro",
    predicted: "B",
    trace: `The model reads the handwritten document header and identifies both the state and year from the visible text.\n\nExplanation: The document indicates Missouri and the year 1872.\nAnswer: B`,
  },
];

const plotConfig = {
  responsive: true,
  displayModeBar: false,
};

function baseLayout(height = 390) {
  return {
    height,
    margin: { l: 110, r: 22, t: 18, b: 42 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(255,255,255,0.36)",
    font: { family: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif", color: theme.ink },
    xaxis: { gridcolor: "rgba(20,49,9,0.10)", zeroline: false, tickfont: { color: theme.muted } },
    yaxis: { gridcolor: "rgba(20,49,9,0.06)", tickfont: { color: theme.ink }, automargin: true },
  };
}

function renderHumanPlot() {
  const ordered = [...humanScores].reverse();
  Plotly.newPlot("human-plot", [{
    type: "bar",
    orientation: "h",
    y: ordered.map((d) => d[0]),
    x: ordered.map((d) => d[1]),
    text: ordered.map((d) => d[1]),
    textposition: "outside",
    cliponaxis: false,
    marker: {
      color: ordered.map((d) => d[0] === "WorldBench" ? theme.ink : "rgba(170,167,127,0.72)"),
      line: { color: ordered.map((d) => d[0] === "WorldBench" ? theme.ink : "rgba(20,49,9,0.18)"), width: 1 },
    },
    hovertemplate: "<b>%{y}</b><br>BT score: %{x}<extra></extra>",
  }], {
    ...baseLayout(410),
    margin: { l: 118, r: 42, t: 8, b: 36 },
    xaxis: { ...baseLayout().xaxis, title: "Bradley-Terry score", range: [480, 1235] },
  }, plotConfig);
}

function renderEmbeddingPlot() {
  const encoder = document.getElementById("encoder-select").value;
  const metric = document.getElementById("metric-select").value;
  const key = `${encoder}_${metric}`;
  const sorted = [...embeddingRows].sort((a, b) => a[key] - b[key]);
  Plotly.react("embedding-plot", [{
    type: "bar",
    orientation: "h",
    y: sorted.map((d) => d.name),
    x: sorted.map((d) => d[key]),
    text: sorted.map((d) => d[key].toFixed(1)),
    textposition: "outside",
    cliponaxis: false,
    marker: {
      color: sorted.map((d) => d.name === "WorldBench" ? theme.ink : "rgba(111,118,83,0.68)"),
      line: { color: "rgba(20,49,9,0.16)", width: 1 },
    },
    hovertemplate: `<b>%{y}</b><br>${metric === "er" ? "Effective Rank" : "Participation Ratio"}: %{x}<extra></extra>`,
  }], {
    ...baseLayout(410),
    margin: { l: 118, r: 48, t: 8, b: 36 },
    xaxis: {
      ...baseLayout().xaxis,
      title: metric === "er" ? "Effective Rank" : "Participation Ratio",
      rangemode: "tozero",
    },
  }, plotConfig);
}

function optionRow(letter, text, item) {
  const li = document.createElement("li");
  li.className = letter === item.answer ? "correct" : "";
  li.innerHTML = `<span>${letter}</span><p>${text}</p>`;
  return li;
}

function renderQuestion(key = questions[0].key) {
  const item = questions.find((q) => q.key === key) || questions[0];
  const root = document.getElementById("question-explorer");
  root.style.setProperty("--domain-color", item.color);
  root.style.setProperty("--domain-color-soft", `${item.color}33`);

  document.querySelectorAll(".domain-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.key === item.key);
  });

  const image = document.getElementById("question-image");
  image.src = item.image;
  image.alt = `${item.domain} example image`;
  document.getElementById("domain-chip").textContent = item.domain;
  document.getElementById("question-title").textContent = item.question;

  const options = document.getElementById("option-list");
  options.innerHTML = "";
  Object.entries(item.options).forEach(([letter, text]) => options.appendChild(optionRow(letter, text, item)));

  const modelGrid = document.getElementById("model-choice-grid");
  modelGrid.innerHTML = "";
  Object.entries(item.choices).forEach(([model, answer]) => {
    const cell = document.createElement("div");
    cell.className = answer === item.answer ? "choice correct" : "choice wrong";
    cell.innerHTML = `<span>${model}</span><strong>${answer}</strong>`;
    modelGrid.appendChild(cell);
  });

  document.getElementById("reasoning-model").textContent = item.reasoningModel;
  const correct = item.predicted === item.answer;
  const result = document.getElementById("reasoning-result");
  result.textContent = correct ? "Correct" : "Incorrect";
  result.className = correct ? "correct" : "wrong";
  document.getElementById("reasoning-text").textContent = item.trace;
}

function renderTabs() {
  const tabs = document.getElementById("domain-tabs");
  questions.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.key = item.key;
    button.textContent = item.domain;
    button.style.setProperty("--tab-color", item.color);
    button.addEventListener("click", () => renderQuestion(item.key));
    tabs.appendChild(button);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.Plotly) {
    renderHumanPlot();
    renderEmbeddingPlot();
    document.getElementById("encoder-select").addEventListener("change", renderEmbeddingPlot);
    document.getElementById("metric-select").addEventListener("change", renderEmbeddingPlot);
  }
  renderTabs();
  renderQuestion();
});
