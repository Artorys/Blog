import ApiController from "../controller/api.controller.js"
import UserPost from "../model/userpost.js"
import Home from "./home.js"

class Edition
{
    static render(id,content)
    {
        const edition = document.createElement("div")
        edition.classList.add("edition")

        const edition__close = document.createElement("div")
        edition__close.classList.add("edition__close")

        const post__edit = document.createElement("input")
        post__edit.classList.add("post__edit")
        post__edit.id = "post-edit"
        post__edit.maxLength = "40"
        post__edit.placeholder = "Edit your post"
        post__edit.type = "text"
        post__edit.value = content

        const post__button = document.createElement("button")
        post__button.classList.add("post__button")
        post__button.type = "button"
        post__button.innerText = "Send"

        edition.append(edition__close,post__edit,post__button)

        document.body.append(edition)

        const elements = Array.from(document.body.children)
        let count = 0
        elements.forEach((el)=>
        {
            if(el.className == "edition")
            {
                count++
                if(count > 1)
                {
                    el.remove()
                }
            }
        })

        edition__close.addEventListener("click",this.close)

       this.sendEdit(id)
    }

    static close(eve)
    {
        const edition = document.querySelector(".edition")
        edition.remove()
    }

    static sendEdit(id)
    {
        const post__button = document.querySelector(".post__button")
        post__button.addEventListener("click",async function(eve)
        {
            const post__content = document.querySelector(".post__edit").value

            const content = new UserPost(post__content)
            
            const post_edited = await ApiController.ApiPostEditId(id,content)

            const userId = ApiController.userId

            const dataUser = await ApiController.ApiUserId(userId)
            
            Home.render(dataUser)
        })
    }
}
export default Edition