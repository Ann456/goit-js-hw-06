const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    //Для нескольких форм
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name);
    //     console.log(value);
    // });
    
    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    
    const formdata = {
        mail,
        password,
    };
    console.log(formdata);

    if (!mail || !password) alert("Dсе поля должны быть заполнены");

    form.reset();
}

    

