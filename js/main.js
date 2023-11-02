const submit_button = document.querySelector("#button");

submit_button.addEventListener("click", () => {
    var email = document.querySelector("#email").value;
    var validacao = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validacao.test(email)) {
        sessionStorage.setItem("email-user", email);
        window.location.href = "success-page.html"
    }
    else {
        var state = document.querySelector("#erro-state");
        var input = document.querySelector("#email");
        state.style.display = "block";
        state.style.color = "#ff7171";
        input.style.backgroundColor = "#ffcaca";
        input.style.borderColor = "#ff0000";
        input.style.color = "#ff7171";
    }
}
)