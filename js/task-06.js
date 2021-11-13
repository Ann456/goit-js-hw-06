//Вариант 1
// const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", event => {

//     if (event.target.value.length === Number(inputEl.dataset.length)) {
//         inputEl.classList.add("valid");
//         inputEl.classList.remove("invalid");
//     } else {
//         inputEl.classList.add("invalid");
//         inputEl.classList.remove("valid");
//     }
// });

// Вариант 2
const inputEl = document.querySelector("#validation-input");

function onInputFunction (event) {
   event.target.value.length === Number(inputEl.dataset.length)?        
   inputEl.classList.add("valid") : inputEl.classList.add("invalid"); 
    if (!inputEl.value) inputEl.removeAttribute("class");
};

inputEl.addEventListener("blur", onInputFunction);