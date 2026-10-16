const feelingData = {
  hopeful: {
    title: "Make room for hope.",
    verse: "“May the God of hope fill you with all joy and peace…” — Romans 15:13",
    next: "Consider one small next step today, or explore a TWC group or gathering when you're ready."
  },
  peaceful: {
    title: "Pause and receive this moment.",
    verse: "“Peace I leave with you; my peace I give you.” — John 14:27",
    next: "You might take a quiet moment for gratitude or share what is helping you feel grounded."
  },
  overwhelmed: {
    title: "You can take this one step at a time.",
    verse: "“Cast all your anxiety on him because he cares for you.” — 1 Peter 5:7",
    next: "You don't have to solve everything at once. Consider talking with someone you trust or asking the church about pastoral support."
  },
  lonely: {
    title: "You deserve care and connection.",
    verse: "“I am with you always.” — Matthew 28:20",
    next: "When you're ready, explore community opportunities or reach out to someone you trust. A website can be a first step toward real connection."
  },
  anxious: {
    title: "Give yourself permission to slow down.",
    verse: "“Do not be anxious about anything…” — Philippians 4:6",
    next: "Try a gentle pause and consider sharing what you're carrying with a trusted person. You don't have to find every answer right now."
  },
  grateful: {
    title: "Let gratitude have a little space.",
    verse: "“Give thanks to the Lord, for he is good.” — Psalm 107:1",
    next: "You could write down one thing you're thankful for or share that gratitude with someone."
  }
};

const feelingGrid = document.getElementById("feelingGrid");
const encouragement = document.getElementById("encouragement");
const resetFeeling = document.getElementById("resetFeeling");

feelingGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-feeling]");
  if (!button) return;
  const data = feelingData[button.dataset.feeling];
  feelingGrid.querySelectorAll(".feeling").forEach((item) => {
    item.classList.toggle("selected", item === button);
    item.setAttribute("aria-pressed", item === button ? "true" : "false");
  });
  encouragement.replaceChildren();
  const icon = document.createElement("div");
  icon.className = "encouragement-icon";
  icon.textContent = "✳";
  const content = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = data.title;
  const verse = document.createElement("p");
  verse.textContent = data.verse;
  verse.style.marginTop = "6px";
  const next = document.createElement("p");
  next.textContent = data.next;
  next.style.marginTop = "8px";
  content.append(title, verse, next);
  encouragement.append(icon, content);
});

resetFeeling.addEventListener("click", () => {
  feelingGrid.querySelectorAll(".feeling").forEach((item) => {
    item.classList.remove("selected");
    item.setAttribute("aria-pressed", "false");
  });
  encouragement.replaceChildren();
  const icon = document.createElement("div");
  icon.className = "encouragement-icon";
  icon.textContent = "✳";
  const message = document.createElement("p");
  message.textContent = "Choose a feeling above to receive a gentle reflection and a possible next step.";
  encouragement.append(icon, message);
});

const prayerText = document.getElementById("prayerText");
const charCount = document.getElementById("charCount");
const prayerForm = document.getElementById("prayerForm");
const prayerResult = document.getElementById("prayerResult");

prayerText.addEventListener("input", () => {
  charCount.textContent = `${prayerText.value.length} / 500`;
});

prayerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const type = document.getElementById("requestType").value;
  const preview = prayerText.value.trim();
  prayerResult.replaceChildren();
  const heading = document.createElement("strong");
  heading.textContent = "Demo preview only — nothing was sent.";
  const detail = document.createElement("p");
  detail.textContent = `Request type: ${type}.`;
  const body = document.createElement("p");
  body.textContent = preview ? `Preview text: “${preview}”` : "No request text was entered.";
  const reminder = document.createElement("p");
  reminder.textContent = "This prototype does not store or transmit your information. A real prayer form would need TWC approval, a designated recipient, and a reviewed privacy process.";
  prayerResult.append(heading, detail, body, reminder);
  prayerResult.hidden = false;
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
