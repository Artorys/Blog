import Home from "../views/home.js"
import ApiController from "./api.controller.js"

class AllpostsController
{
    static eventAllPosts()
    {
       const allPostButton = document.querySelector(".allPosts__button")
        allPostButton.addEventListener("click",this.allPosts)
    }
    static async allPosts(eve)
    {
        const posts__box = document.querySelector(".posts__box")
        posts__box.innerHTML = ""

        const posts = await ApiController.ApiPosts()
        const {data} = posts
        data.forEach((post)=>
        {
            Home.createPost(post)
        })
    }
}
export default AllpostsController