const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const responseImage = document.getElementById("response-image");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const noBtnContainer = document.querySelector(".no-btn-container");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Great! Looking forward to our date!";
  document.body.style.background = "rgba(255, 248, 240, 0.8)"; // Hintergrundfarbe ändern
  responseImage.style.display = "block"; // Bild anzeigen
  
  // Entferne die Buttons
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  noBtnContainer.style.display = 'none'; // Stellt sicher, dass auch der noBtnContainer entfernt wird
});

noBtn.addEventListener("mouseover", () => {
  if (!noBtnContainer.contains(noBtn)) {
    noBtnContainer.appendChild(noBtn);
    noBtnContainer.style.display = 'block'; // Container sichtbar machen
  }

  const noBtnRect = noBtn.getBoundingClientRect();
  const containerRect = noBtnContainer.getBoundingClientRect();
  const maxX = containerRect.width - noBtnRect.width;
  const maxY = containerRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Falls der Button außerhalb des Containers positioniert wird, korrigieren Sie ihn
  if (randomX + noBtnRect.width > containerRect.width) {
    noBtn.style.left = `${containerRect.width - noBtnRect.width}px`;
  }
  if (randomY + noBtnRect.height > containerRect.height) {
    noBtn.style.top = `${containerRect.height - noBtnRect.height}px`;
  }
});
