import UserLogin from "../model/userlogin.js";
import ApiController from "./api.controller.js";
import Message from "../views/message.js"
import Home from "../views/home.js";

class LoginController
{
    static eventLogin()
    {
        const login_button = document.querySelector("#login-form")
        login_button.addEventListener("submit",this.login)
    }
    static async login(eve)
    {
        eve.preventDefault()
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const newUserLogin = new UserLogin(email,password)
        const login = await ApiController.apiLogin(newUserLogin)

        if(login.message)
        {
            const {message} = login
            Message.render(message)           
        }
        else
        {
            const {token, userId} = login
            localStorage.removeItem(ApiController.userId)
            ApiController.userId = userId
            ApiController.token = token
            localStorage.setItem(`${userId}`, `${token}`)
            const dataUser = await ApiController.ApiUserId(userId)
            Home.render(dataUser)
        }
    }

}
export default LoginController