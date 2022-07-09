class Message
{
    static render(error)
    {
        const message = document.createElement("div")
        message.classList.add("message")
        
        const message__box = document.createElement("div")
        message__box.classList.add("message__box")
        
        const message__h2 = document.createElement("h2")
        message__h2.innerText = "Alert!"
        
        const message__error = document.createElement("p")
        message__error.classList.add("error")
        message__error.innerText = `${error}.`

        message__box.append(message__h2,message__error)
        message.appendChild(message__box)
        document.body.append(message)

        const elements = Array.from(document.body.children)
        let count = 0
        elements.forEach((el)=>
        {
            const {className} = el
            if(className == "message")
            {
                count++
                if(count > 1)
                {
                    el.remove()
                }
            }
        })

        message.addEventListener("click",this.close)
    }
    static close(eve)
    {
        const{layerX,layerY} = eve
        if(layerX >= 177 && layerX <= 200 && layerY >= 0 && layerY <= 25)
        {
           eve.target.remove()
        }
    }

}
export default Message