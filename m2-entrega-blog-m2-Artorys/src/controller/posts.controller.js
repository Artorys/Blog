import ApiController from "./api.controller.js"
import UserPost from "../model/userpost.js"
import Home from "../views/home.js"
class Posts
{
    static eventPosting()
    {
        const post = document.querySelector(".button-post")
        post.addEventListener("click",this.posting)
    }
    static async posting(eve)
    {
        const textarea_post = document.querySelector(".textarea-post").value
        const postContent = new UserPost(textarea_post)

        const posts = await ApiController.ApiPosting(postContent)
        if(!posts.message)
        {
            const {id : idPost} = posts
            const {user} = posts
            const {id : idUser} = user
            localStorage.setItem(`${idPost}`, `${idUser}`)
            Home.listPostsUser()
        }

    }
}
export default Posts