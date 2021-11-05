const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};


//data-action="decrement"
const buttonElDecrement = document.querySelector(`[data-action="decrement"]`);
console.log(buttonElDecrement);

const buttonElDecrementClick = () => {
    counterValue.decrement();
    console.log(counterValue);
    value.textContent = counterValue.value;
};

buttonElDecrement.addEventListener("click", buttonElDecrementClick);


//data-action="increment"
const buttonElIncrement = document.querySelector('[data-action="increment"]');
console.log(buttonElIncrement);

const buttonElIncrementClick = () => {
    counterValue.increment();
    console.log(counterValue);
    value.textContent = counterValue.value;
};

buttonElIncrement.addEventListener("click", buttonElIncrementClick);
