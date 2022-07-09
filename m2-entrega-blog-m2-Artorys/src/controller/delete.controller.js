import Home from "../views/home.js"
import ApiController from "./api.controller.js"

class DeleteController
{
    static eventDelete()
    {
       document.addEventListener("click",this.delete)
    }
    static async delete(eve)
    {
        if(eve.target.classList.contains("delete"))
        {
            const postId = eve.target.closest(".posts").id

            const dataUser = await ApiController.ApiUserId(ApiController.userId)

            const deletePost = await ApiController.ApiPostDeleteId(postId)
            localStorage.removeItem(`${postId}`)

            Home.render(dataUser)
        }
    }
}
export default DeleteController