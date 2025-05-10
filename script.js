const words = [
  "りんご", "ねこ", "ロケット", "ピアノ", "山", "スマホ",
  "雨", "おにぎり", "忍者", "図書館"
];

function changeWord() {
  const word = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word-box").textContent = word;
}

function showRules() {
  document.getElementById("main-screen").style.display = "none";
  document.getElementById("rules-screen").style.display = "block";
}

function showMain() {
  document.getElementById("rules-screen").style.display = "none";
  document.getElementById("main-screen").style.display = "block";
}
