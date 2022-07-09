import Login from "./login.js"
import registerController from "../controller/register.controller.js"

class Register
{
    static render()
    {
        document.body.innerHTML = ""

        const register = document.createElement("div")
        register.classList.add("register")
        register.id = "register"

        const register__box = document.createElement("div")
        register__box.classList.add("register__box")

        const register__header = document.createElement("header")
        register__header.classList.add("register__header")
        const header__h1  = document.createElement("h1")
        header__h1.innerText = "Register"

        const register__main = document.createElement("main")
        register__main.classList.add("register__main")
        const main__form = document.createElement("form")
        main__form.classList.add("register__form")
        main__form.id = "register-form"
        const form__input_username = document.createElement("input")
        form__input_username.type = "text"
        form__input_username.name = "username"
        form__input_username.id = "username"
        form__input_username.placeholder ="Username"
        form__input_username.required = true
        form__input_username.maxLength = "12"
        const form__input_email = document.createElement("input")
        form__input_email.type = "email"
        form__input_email.name = "email"
        form__input_email.id = "email"
        form__input_email.placeholder ="Email"
        form__input_email.required = true
        const form__input_avatarurl = document.createElement("input")
        form__input_avatarurl.type = "url"
        form__input_avatarurl.name = "avatarUrl"
        form__input_avatarurl.id = "avatarUrl"
        form__input_avatarurl.placeholder ="Profile picture"
        const form__input_password = document.createElement("input")
        form__input_password.type = "password"
        form__input_password.name = "password"
        form__input_password.id = "password"
        form__input_password.placeholder ="password"
        form__input_password.required = true
        form__input_password.minLength = "6"
        const form__box_button = document.createElement("div")
        form__box_button.classList.add("form__box_button")
        const form__button = document.createElement("button")
        form__button.id = "register-button"
        form__button.type = "submit"
        form__button.innerText = "Done"
        const form__a = document.createElement("a")
        form__a.innerText = `
        already have an account?Click here`

        form__a.addEventListener("click",this.redirectLogin)

        register__header.append(header__h1)
        form__box_button.append(form__button,form__a)
        main__form.append(form__input_username,form__input_email,form__input_avatarurl,form__input_password,form__box_button)
        register__main.appendChild(main__form)
        register__box.append(register__header,register__main)
        register.appendChild(register__box)
        document.body.append(register)

        registerController.eventRegister()
    }
    static redirectLogin()
    {
        Login.render()
    }
}
export default Register