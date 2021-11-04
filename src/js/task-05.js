const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", event => {
    outputEl.textContent = event.target.value;
    if (event.target.value === "") {
        outputEl.textContent = "Anonymous";
    }
});

