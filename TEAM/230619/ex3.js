const chat = document.querySelector("#chat");
const messageForm = document.querySelector("#messageForm");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { user, content } = e.target;

  if (user.value === "" || content.value === "") return;

  chat.innerHTML += `
    <div class="message">
        <span class="user">${user.value}:</span>
        <span class="content">${content.value}</span>
    </div>
    `;
  user.value = "";
  content.value = "";
  user.focus();
});
