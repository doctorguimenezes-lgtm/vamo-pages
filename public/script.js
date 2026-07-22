/*
  Cole abaixo o endereço público do seu formulário Tally.
  Exemplo: https://tally.so/r/abc123
*/
const TALLY_FORM_URL = "";

const frame = document.getElementById("tally-frame");
const placeholder = document.getElementById("form-placeholder");
const fallbackLink = document.getElementById("fallback-form-link");

if (TALLY_FORM_URL.trim()) {
  const formId = TALLY_FORM_URL.split("/").filter(Boolean).pop();
  frame.src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  frame.hidden = false;
  placeholder.hidden = true;
  fallbackLink.href = TALLY_FORM_URL;

  const script = document.createElement("script");
  script.src = "https://tally.so/widgets/embed.js";
  script.async = true;
  document.body.appendChild(script);
} else {
  fallbackLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Adicione o endereço do formulário Tally no arquivo public/script.js.");
  });
}
