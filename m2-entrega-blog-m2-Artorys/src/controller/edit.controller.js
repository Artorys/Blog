import Edition from "../views/edition.js"

class EditController
{
    static eventEdit()
    {
        document.addEventListener("click",this.edit)
    }

    static edit(eve)
    {
        if(eve.target.classList.contains("edit"))
        {
            const post = eve.target.closest(".posts")

            const postId = post.id

            const postContent = post.children[1].lastChild.innerText
            

            Edition.render(postId,postContent)
        }
    }
}
export default EditController