const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener("input", event => {
    document.querySelector("#text").style.fontSize=event.target.value + "px";
});