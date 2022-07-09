import Login from "./login.js"
import Posts from "../controller/posts.controller.js"
import LoginController from "../controller/login.controller.js"
import ApiController from "../controller/api.controller.js"
import EditController from "../controller/edit.controller.js"
import DeleteController from "../controller/delete.controller.js"

class Home
{
    static render(dataUser)
    {
        const {id,email,username,avatarUrl,createAt} = dataUser
        
        document.body.innerHTML = ""

        const home = document.createElement("div")
        home.classList.add("home")

        const home__header = document.createElement("header")
        home__header.classList.add("home__header")

        const header__box = document.createElement("div")
        header__box.classList.add("header__box")

        const header__box_profile = document.createElement("div")
        header__box_profile.classList.add("header__box-profile")
        
        const profile_img = document.createElement("img")
        profile_img.classList.add("profile-img")

        profile_img.alt = "Foto de perfil"
        profile_img.id = "profile-img"
        let count = 0
        profile_img.src = `${avatarUrl}`

        const profile_name = document.createElement("h1")
        profile_name.classList.add("profile-name")
        profile_name.id = "profile-name"
        profile_name.innerText = `${username}`

        const header__box_logout = document.createElement("div")
        header__box_logout.classList.add("header__box-logout")

        const button__logout = document.createElement("button")
        button__logout.classList.add("logout")
        button__logout.type = "button"
        button__logout.innerText = "Logout"
        button__logout.addEventListener("click",this.logout)

        const post__main = document.createElement("main")
        post__main.classList.add("post__main")

        const post__ul = document.createElement("ul")
        post__ul.classList.add("post__ul")

        const post__section = document.createElement("section")
        post__section.classList.add("post__section")

        const section__box = document.createElement("div")
        section__box.classList.add("section__box")

        const button__post = document.createElement("div")
        button__post.classList.add("button-post")
        button__post.innerText = "+"

        const textarea_post = document.createElement("input")
        textarea_post.classList.add("textarea-post")
        textarea_post.maxLength = "40"
        textarea_post.name = "posts"
        textarea_post.id = "posts"
        textarea_post.placeholder = "Start posting now"
        
        //na criacao de posts criar o card de posts
        const posts__box = document.createElement("div")
        posts__box.classList.add("posts__box")

        //fim do card de posts

        header__box_profile.append(profile_img,profile_name)
        header__box_logout.append(button__logout)
        header__box.append(header__box_profile,header__box_logout)
        home__header.appendChild(header__box)

        section__box.append(textarea_post,button__post)
        post__section.append(section__box)
        post__ul.append(post__section)
        post__main.appendChild(post__ul)
        home.append(home__header,post__main,posts__box)

        document.body.appendChild(home)

        Posts.eventPosting()
        this.checkImg(profile_img)
        this.listPostsUser()
    }
    static listPostsUser()
    {
        const posts__box = document.querySelector(".posts__box")
        posts__box.innerHTML = ""

       const posts = Object.keys(localStorage)
       posts.forEach(async (post)=>
       {
            if(post != ApiController.userId)
            {
                const userId = localStorage.getItem(post)
                const postObj = await ApiController.ApiPostId(post)

                if(userId == ApiController.userId)
                {
                    
                    this.createPostUser(postObj)
                }
            }
       })
    }
    static createPostUser(postObj)
    {
        const posts__box = document.querySelector(".posts__box")
        
        const {id : idPost,content,createdAt,user} = postObj
        const {id : idUser,username,avatarUrl} = user
        
        const creationDate = createdAt.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)
        
        
        const posts  = document.createElement("li")
        posts.classList.add("posts")

        posts.id = idPost

        const box__profile_img = document.createElement("div")
        box__profile_img.classList.add("box__profile-img")

        const profile_img = document.createElement("img")
        profile_img.classList.add("profile-img")
        profile_img.src = avatarUrl

        const box__profile_content = document.createElement("div")
        box__profile_content.classList.add("box__profile-content")

        const profile_post_name = document.createElement("h2")
        profile_post_name.classList.add("profile-name")

        profile_post_name.innerText = username

        const profile_post__posts = document.createElement("p")
        profile_post__posts.classList.add("profile-post")

        profile_post__posts.innerText = content

        const post__box_methods = document.createElement("div")
        post__box_methods.classList.add("box__methods")

        const method_edit = document.createElement("p")
        method_edit.classList.add("edit")
        method_edit.innerText = "Edit"

        const method_delete = document.createElement("p")
        method_delete.classList.add("delete")
        method_delete.innerText = "Delete"

        const date = document.createElement("p")
        date.classList.add("date")
        date.innerText = creationDate

        post__box_methods.append(method_edit,method_delete,date)
        box__profile_content.append(profile_post_name,profile_post__posts)
        box__profile_img.append(profile_img)
        posts.append(box__profile_img,box__profile_content,post__box_methods)
        posts__box.append(posts)

        this.checkImg(profile_img)

        EditController.eventEdit()
        DeleteController.eventDelete()

    }
    static logout()
    {

        Login.render()
        localStorage.removeItem(`${ApiController.userId}`)
    }
    static checkImg(img)
    {
        img.addEventListener("error",function()
        {
            img.src = "/src/assets/img/poze.jpg"
        })
    }
}
export default Home