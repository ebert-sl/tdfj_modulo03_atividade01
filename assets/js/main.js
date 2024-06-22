const form = document.getElementById("form");

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = document.createElement("p");
  text.innerHTML = "Formulário enviado!"
  form.appendChild(text)
  setTimeout(() => text.remove(), 3000);
})