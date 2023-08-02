
const showErrorStyle = (container, inputBox , spanBox) => {
    container.classList.add("error");
    inputBox.classList.add("error");
    spanBox.classList.add("error");
    container.classList.remove("allow");
    inputBox.classList.remove("allow");
}

const removeErrorStyle = (container, inputBox , spanBox) => {
    container.classList.add("error");
    inputBox.classList.add("error");
    spanBox.classList.add("error");
    container.classList.remove("allow");
    inputBox.classList.remove("allow");
}

const emailValidating = () => {
    const emailContainer = document.querySelector(".email_box");
    const emailInputBox = document.querySelector("#email_login_err");
    const emailSpanBox = document.querySelector(".email_message");

    let emailRegex = /^\w+@[a-zA-Z]{3,}\.com$/i;
    let email = emailInputBox.value;

    if(email === "") {
        showErrorStyle(emailContainer,emailInputBox,emailSpanBox);
        emailSpanBox.innerHTML = "Hãy điền email" ;
    }
    else if(emailRegex.test(email) == false) {
        showErrorStyle(emailContainer,emailInputBox,emailSpanBox);
        emailSpanBox.innerHTML = "Email không đúng định dạng" ;
    }
    else {
        removeErrorStyle(emailContainer, emailInputBox, emailSpanBox);
        emailSpanBox.innerHTML = "";
    }
}
const passValidating = () => {
    const passContainer = document.querySelector(".password_box");
    const passInputBox = document.querySelector("#password_login_err");
    const passSpanBox = document.querySelector(".password_message");

    let password = passInputBox.value;

    if(password === "") {
        showErrorStyle(passContainer, passInputBox, passSpanBox);
        passSpanBox.innerHTML = "Hãy điền mật khẩu";
    }
    else {
        removeErrorStyle(passContainer, passInputBox, passSpanBox);
        passSpanBox.innerHTML = "";
    }
}

function Login() {
    let email = $('#email_login_err').val();
    let password = $('#password_login_err').val();

    if (email !== "" && password !== "") {
        req = {
            email: email,
            password: password
        }
        let myJSON = JSON.stringify(req);
        $.ajax({
            url: '/api/auth/signin',
            type: 'POST',
            data: myJSON,
            contentType: "application/json; charset=utf-8",
            success: function(data) {
                location.href = "/admin/categories";
            },
            error: function(data) {
               console.log(data);
            }
        });
    }

}
