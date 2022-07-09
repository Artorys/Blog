import LoginController from "./src/controller/login.controller.js";
import Register from "./src/views/register.js";
import Login from "./src/views/login.js"
import Home from "./src/views/home.js";
import registerController from "./src/controller/register.controller.js"
import Posts from "/src/controller/posts.controller.js"
import ApiController from "./src/controller/api.controller.js";
import userLogin from "./src/model/userlogin.js";
import UserRegister from "./src/model/userregister.js";
import Message from "./src/views/message.js";
import UserPost from "./src/model/userpost.js"
import Edition from "./src/views/edition.js"

window.addEventListener("beforeunload",function()
{
    localStorage.removeItem(ApiController.userId)
})

Login.render()
