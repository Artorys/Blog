import Home from "../views/home.js"

class MyPostsController
{
    static eventMyPosts()
    {
        const myPostButton = document.querySelector(".myPosts__button")
        myPostButton.addEventListener("click",this.myPosts)
    }
    static myPosts(eve)
    {
        Home.listPostsUser()
    }
}
export default MyPostsController