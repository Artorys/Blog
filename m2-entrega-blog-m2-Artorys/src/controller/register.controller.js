import UserRegister from "../model/userregister.js"
import ApiController from "./api.controller.js"
import Message from "../views/message.js"
import login from "../views/login.js"


class registerController
{
    static eventRegister()
    {
        const register__button = document.querySelector("#register-form")
         register__button.addEventListener("submit",this.register)
    }
    static async register(eve)
    {
       eve.preventDefault()
       const username = document.querySelector("#username").value
       const email = document.querySelector("#email").value
       const avatarUrl = document.querySelector("#avatarUrl").value
       const password = document.querySelector("#password").value

       const newUserRegister = new UserRegister(username,email,avatarUrl,password) 
       const register = await ApiController.apiRegister(newUserRegister)

       if(register.message)
       {
          const {message} = register
          Message.render(message)
       }
       else
       {
         console.log(register)
         login.render()

       }
    }
}
export default registerController