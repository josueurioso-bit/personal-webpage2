const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

const fakeSendBtn = document.getElementById("fakeSendBtn");
const nameInput = document.getElementById("nameInput");
const msgInput = document.getElementById("msgInput");
const formStatus = document.getElementById("formStatus");

fakeSendBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const msg = msgInput.value.trim();

  if (!name || !msg) {
    formStatus.textContent = "Please add your name and a message 🙂";
    return;
  }

  formStatus.textContent = `Thanks, ${name}! If this were wired up, your message would be sent.`;
  nameInput.value = "";
  msgInput.value = "";
});
