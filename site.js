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

const embeddingRows = {
  siglip: {
    title: "SigLIP 2",
    rows: [
      ["MEGA", 140.9, 70.7], ["MMMU", 156.4, 50.8], ["SEED", 167.2, 53.7],
      ["MME", 172.0, 50.5], ["MMStar", 194.1, 68.7], ["VQAv2", 210.0, 99.7],
      ["MMT", 223.8, 100.2], ["MMBench", 244.0, 118.8], ["WorldBench", 250.2, 105.0],
    ],
  },
  perception: {
    title: "Perception Encoder",
    rows: [
      ["MEGA", 154.8, 81.8], ["MMMU", 173.3, 58.2], ["MMStar", 198.6, 59.1],
      ["MME", 204.3, 63.4], ["SEED", 211.4, 73.5], ["VQAv2", 220.2, 102.6],
      ["MMT", 253.3, 114.7], ["MMBench", 256.4, 102.3], ["WorldBench", 308.3, 151.1],
    ],
  },
  dinov3: {
    title: "DINO v3",
    rows: [
      ["MEGA", 189.5, 102.9], ["MMMU", 230.8, 62.1], ["MMStar", 351.3, 101.6],
      ["SEED", 486.1, 203.5], ["MME", 556.6, 241.7], ["MMT", 563.6, 313.2],
      ["VQAv2", 580.4, 334.9], ["WorldBench", 601.1, 272.8], ["MMBench", 626.8, 380.6],
    ],
  },
};

const modelMeta = {
  "GPT-5.4": { logo: "assets/logos/gpt.png", label: "GPT-5.4" },
  "Gemini-3.1-Pro": { logo: "assets/logos/gemini.png", label: "Gemini-3.1-Pro" },
  "Qwen3.5-VL": { logo: "assets/logos/qwen.png", label: "Qwen3.5-VL" },
  "Kimi-K2.5": { logo: "assets/logos/kimi.svg", label: "Kimi-K2.5" },
};

const questions = [
  {
    key: "living",
    domain: "Living Things",
    color: "#fb737d",
    image: "assets/question_original_living.jpg",
    question: "How many mosquitoes are in the image?",
    options: { A: "0", B: "1", C: "2", D: "3" },
    answer: "B",
    choices: { "GPT-5.4": "C", "Gemini-3.1-Pro": "B", "Qwen3.5-VL": "C", "Kimi-K2.5": "C" },
    reasoningModel: "Qwen3.5-VL-35B-A3B actual trace",
    predicted: "C",
    trace: `The user wants me to count the mosquitoes in the image.

1.  **Identify the main subject:** In the center foreground, there is a large, clear image of a mosquito. It has long legs, a proboscis, and a body that appears to be filled with blood (red abdomen). This is clearly one mosquito.
2.  **Scan for other subjects:** Looking to the left of the main mosquito, there is a smaller, slightly out-of-focus mosquito. It also has a reddish abdomen, indicating it has fed on blood. This is a second mosquito.
3.  **Check for others:** Are there any more? The background is blurry. There are some blurry shapes that look like legs or wings of the main mosquito, but no distinct third mosquito is visible. Wait, let me look closer at the background. There are blurry wing-like structures in the upper right, but they seem to belong to the main mosquito or are just artifacts/blur. The small mosquito on the left is distinct.
4.  **Count:** So, I see one large mosquito in the center and one smaller mosquito to the left. That makes a total of 2 mosquitoes.

Therefore, the count is 2.
</think>

Explanation: The image shows a close-up view of mosquitoes on skin. There is one large, prominent mosquito in the center foreground with a full red abdomen. To the left, there is a smaller, slightly out-of-focus mosquito that also has a reddish abdomen. Thus, there are two distinct mosquitoes visible.
Answer: C`,
  },
  {
    key: "objects",
    domain: "Objects",
    color: "#fed185",
    image: "assets/question_original_objects.jpg",
    question: "What is beneath the shrimps inside the metal bucket?",
    options: { A: "Octopus", B: "More shrimps", C: "Ice", D: "Not possible to tell" },
    answer: "D",
    choices: { "GPT-5.4": "C", "Gemini-3.1-Pro": "C", "Qwen3.5-VL": "C", "Kimi-K2.5": "C" },
    reasoningModel: "Qwen3.5-VL-35B-A3B actual trace",
    predicted: "C",
    trace: `The user wants to identify what is underneath the shrimp in the metal bucket.

1.  **Analyze the image:** I see a metal bucket filled with cooked shrimp. The bucket is sitting on a bed of lettuce on a white plate.
2.  **Focus on the inside of the bucket:** Looking closely at the shrimp, they are piled on top of something. The shrimp are pink/orange, indicating they are cooked. They are sitting on a white, crystalline substance. This is characteristic of ice, which is commonly used to keep seafood like shrimp cold and fresh, often referred to as a "shrimp boil" or "shrimp tower" presentation.
3.  **Evaluate the options:**
    *   A: Octopus - There is no octopus visible.
    *   B: More shrimps - While there are many shrimps, the question asks what is *beneath* them. The base layer is not more shrimp, but rather the cooling agent.
    *   C: Ice - The white, chunky substance underneath the shrimp is clearly ice. This is standard for this type of dish.
    *   D: Not possible to tell - It is quite visible.

4.  **Conclusion:** The white material beneath the shrimp is ice.
</think>

Explanation: The image shows a metal bucket filled with cooked shrimp. Looking closely at the bottom of the bucket, underneath the pile of shrimp, there is a white, crystalline substance. This is ice, which is commonly used to keep the seafood cold and fresh in this type of presentation.
Answer: C`,
  },
  {
    key: "scenes",
    domain: "Scenes",
    color: "#ffe94e",
    image: "assets/question_original_scenes.jpg",
    question: "What item is clearly visible on the table closest to the viewer?",
    options: { A: "An open takeout box", B: "A notepad", C: "Scattered paper", D: "A computer" },
    answer: "A",
    choices: { "GPT-5.4": "B", "Gemini-3.1-Pro": "A", "Qwen3.5-VL": "B", "Kimi-K2.5": "B" },
    reasoningModel: "Qwen3.5-VL-35B-A3B actual trace",
    predicted: "B",
    trace: `The user wants me to identify an item on the table closest to the viewer.

1.  **Locate the table:** I need to find the table in the foreground. Looking at the bottom center of the image, there is a low, round wooden table surrounded by red armchairs. This is the closest table.
2.  **Examine the table:** On top of this round table, there is a white, rectangular object.
3.  **Identify the object:** It looks like a piece of paper or a small stack of papers, possibly a notepad or just a sheet of paper. Let's look at the options.
    *   A: An open takeout box - It doesn't look like a box. It's flat.
    *   B: A notepad - It looks like a white rectangular block, which could be a notepad.
    *   C: Scattered paper - It looks like a single flat object, maybe a notepad, rather than loose scattered papers. Wait, let me look closer. It looks like a white rectangular object, possibly a notepad or a book.
    *   D: A computer - Definitely not.

It looks like a white rectangular object on a coffee table. It looks like a notepad.
Therefore, the answer is B.
</think>

Explanation: Looking at the table in the immediate foreground (bottom center), there is a low, round wooden table. On top of it sits a white, rectangular object. It appears to be a notepad or a stack of papers, rather than a computer, takeout box, or scattered loose papers. It has the distinct shape and appearance of a notepad.

Answer: B`,
  },
  {
    key: "digital",
    domain: "Digital World",
    color: "#5a94ea",
    image: "assets/question_original_digital.png",
    question: "What is the symbol next to the recipient's name?",
    options: { A: "A search bar", B: "A heart", C: "A dropdown arrow", D: "A setting icon" },
    answer: "C",
    choices: { "GPT-5.4": "C", "Gemini-3.1-Pro": "C", "Qwen3.5-VL": "C", "Kimi-K2.5": "B" },
    reasoningModel: "Qwen3.5-VL-35B-A3B actual trace",
    predicted: "C",
    trace: `The user wants me to identify a specific symbol in the email header.
1.  **Locate the recipient's name:** I need to look at the "To:" field in the email header.
2.  **Identify the text:** The text says "To: Leo Notenboom".
3.  **Look next to the name:** Immediately to the right of "Leo Notenboom", there is a small, downward-pointing triangle or arrow.
4.  **Analyze the options:**
    *   A: A search bar - No, that's not a search bar.
    *   B: A heart - No, it's not a heart shape.
    *   C: A dropdown arrow - Yes, it looks like a small triangle pointing down, which is standard UI for a dropdown menu or contact details in email clients (like Gmail).
    *   D: A setting icon - No, it's not a gear or cog.

The symbol is a small downward-pointing triangle, which functions as a dropdown arrow to show contact details or options for that recipient.
</think>

Explanation: Looking at the email header section, specifically next to the "To:" field where the recipient's name "Leo Notenboom" is listed, there is a small, downward-pointing triangle symbol. This is a standard UI element used in email clients (like Gmail) to indicate a dropdown menu for contact details.

Answer: C`,
  },
  {
    key: "academics",
    domain: "Academics",
    color: "#73ad5c",
    image: "assets/question_original_academics.jpg",
    question: "What continent outline is clearly visible on the woodland circle in the image?",
    options: { A: "South America", B: "Europe", C: "Australia", D: "Africa" },
    answer: "C",
    choices: { "GPT-5.4": "C", "Gemini-3.1-Pro": "C", "Qwen3.5-VL": "D", "Kimi-K2.5": "C" },
    reasoningModel: "Qwen3.5-VL-35B-A3B actual trace",
    predicted: "D",
    trace: `The user wants me to identify the continent outline visible within the "woodland" circle on the provided infographic.

1.  **Locate the "woodland" circle:** I need to scan the infographic for the label "woodland". Looking at the right side of the globe, there is a large red circle. The label "woodland" points to this red circle.
2.  **Analyze the red "woodland" circle:** Inside the large red circle, there is a faint outline of a landmass.
    *   The shape is large, somewhat triangular but with a bulge on the west coast and a horn on the east.
    *   This shape is unmistakably the continent of Africa. It has the distinct bulge of West Africa and the Horn of Africa.
3.  **Match with options:**
    *   A: South America
    *   B: Europe
    *   C: Australia
    *   D: Africa

The correct match is D.
</think>

Explanation: The "woodland" circle is the red one on the right side of the globe. The outline within that circle resembles Africa, with the bulge of West Africa and the Horn of Africa visible.
Answer: D`,
  },
  {
    key: "dct",
    domain: "Documents, Charts, & Tables",
    color: "#a77dea",
    image: "assets/question_original_dct.jpg",
    question: "Which state and which year does this mortgage document indicate?",
    options: { A: "Missouri, 1873", B: "Missouri, 1872", C: "Mississippi, 1873", D: "Mississippi, 1872" },
    answer: "B",
    choices: { "GPT-5.4": "A", "Gemini-3.1-Pro": "B", "Qwen3.5-VL": "B", "Kimi-K2.5": "B" },
    reasoningModel: "Qwen3.5-VL-35B-A3B actual trace",
    predicted: "B",
    trace: `The user wants me to identify the state and year from the provided document.

1.  **Identify the State:**
    *   I need to scan the document for location names.
    *   Looking at the top section: "of the County of Washington and State of Missouri". This appears twice.
    *   Looking further down: "of the County of Washington and State of Missouri".
    *   So, the state is definitely Missouri. This eliminates options C and D (Mississippi).

2.  **Identify the Year:**
    *   I need to look for a date.
    *   Scanning down the document...
    *   Near the bottom, there is a line: "Witness our hands and seals, this 16th day of February A. D. 1872."
    *   Also, slightly above that, there is a mention of a note dated "on the 16th day of February 1872".
    *   So, the year is 1872. This eliminates option A (1873).

3.  **Combine findings:**
    *   State: Missouri
    *   Year: 1872
    *   This matches Option B.
</think>

Explanation: The document clearly states "State of Missouri" in the first few lines ("of the County of Washington and State of Missouri"). Additionally, near the bottom of the document, the date is written as "16th day of February A. D. 1872".

Answer: B`,
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
    plot_bgcolor: "#ffffff",
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

function renderEmbeddingStack() {
  Object.entries(embeddingRows).forEach(([key, payload]) => {
    const names = payload.rows.map((d) => d[0]);
    const er = payload.rows.map((d) => d[1]);
    const pr = payload.rows.map((d) => d[2]);
    Plotly.newPlot(`embedding-${key}`, [
      {
        type: "bar",
        name: "Effective Rank",
        x: names,
        y: er,
        text: er.map((d) => d.toFixed(1)),
        textposition: "outside",
        marker: { color: "rgba(254, 209, 133, 0.95)", line: { color: "rgba(20,49,9,0.18)", width: 1 } },
        hovertemplate: "<b>%{x}</b><br>Effective Rank: %{y}<extra></extra>",
      },
      {
        type: "bar",
        name: "Participation Ratio",
        x: names,
        y: pr,
        text: pr.map((d) => d.toFixed(1)),
        textposition: "outside",
        marker: { color: "rgba(90, 148, 234, 0.9)", line: { color: "rgba(20,49,9,0.18)", width: 1 } },
        hovertemplate: "<b>%{x}</b><br>Participation Ratio: %{y}<extra></extra>",
      },
    ], {
      height: key === "dinov3" ? 245 : 225,
      margin: { l: 54, r: 88, t: 28, b: 46 },
      barmode: "group",
      bargap: 0.22,
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "#ffffff",
      title: { text: payload.title, font: { size: 15, color: theme.ink }, y: 0.98 },
      font: { family: "ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif", color: theme.ink, size: 11 },
      xaxis: { tickangle: 0, tickfont: { size: 10 }, linecolor: "#222", mirror: true, showgrid: false },
      yaxis: { title: "Effective Rank", gridcolor: "rgba(20,49,9,0.12)", zeroline: false, linecolor: "#222", mirror: true },
      legend: key === "dinov3" ? { orientation: "h", x: 0, y: 1.18, bgcolor: "rgba(255,255,255,0.78)" } : { orientation: "h", x: 0, y: 1.22, font: { size: 10 } },
      annotations: [{
        text: "Participation Ratio",
        textangle: 90,
        xref: "paper",
        yref: "paper",
        x: 1.045,
        y: 0.5,
        showarrow: false,
        font: { size: 11, color: theme.ink },
      }],
    }, plotConfig);
  });
}

function optionRow(letter, text, item) {
  const li = document.createElement("li");
  li.className = letter === item.answer ? "correct" : "";
  const selectedModels = Object.entries(item.choices).filter(([, answer]) => answer === letter);
  const logos = selectedModels.map(([model]) => {
    const meta = modelMeta[model];
    return `<img class="model-logo" src="${meta.logo}" alt="${meta.label}" title="${meta.label}">`;
  }).join("");
  li.innerHTML = `<span>${letter}</span><p>${text}</p><div class="option-logos">${logos}</div>`;
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
    const meta = modelMeta[model];
    const cell = document.createElement("div");
    cell.className = answer === item.answer ? "choice correct" : "choice wrong";
    cell.innerHTML = `<img class="model-logo" src="${meta.logo}" alt="${meta.label}"><span>${meta.label}</span><strong>${answer}</strong>`;
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
    renderEmbeddingStack();
  }
  renderTabs();
  renderQuestion();
});
