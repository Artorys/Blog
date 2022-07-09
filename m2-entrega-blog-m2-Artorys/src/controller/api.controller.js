class ApiController
{
    static baseUrl = `https://blog-m2.herokuapp.com`
    static async apiRegister(dataUser)
    {     
        return fetch(`${this.baseUrl}/users/register`,
        {
            method : "POST",
            headers : 
            {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(dataUser)
        }).then((response)=>
        {
            return response.json()
        })
    }
    static async apiLogin(dataUser)
    {
        return fetch(`${this.baseUrl}/users/login`,
        {
            method : "POST",
            headers : 
            {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(dataUser)
        }).then((response)=>
        {
            return response.json()
        })
    }
    static async ApiUserId(id)
    {
        return fetch(`${this.baseUrl}/users/${id}`,
        {
            method : "GET",
            headers : 
            {
                "Authorization" : `Bearer ${this.token}`
            }
        }).then((response)=>response.json())
    }
    static async ApiPosting(dataPost)
    {
        return fetch(`${this.baseUrl}/posts`,
        {
            method : "POST",
            headers : 
            {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${this.token}`
            },
            body : JSON.stringify(dataPost)
        }).then((response)=>
        {
            return response.json()
        })
    }
    static async ApiPostId(id)
    {
        return fetch(`${this.baseUrl}/posts/${id}`,
    {
        method : "GET",
        headers : 
        {
            "Authorization" : `Bearer ${this.token}`
        }
    }).then((response)=> response.json())
    }

    static async ApiPostEditId(id,content)
    {
        return fetch(`${this.baseUrl}/posts/${id}`,
        {
            method : "PATCH",
            headers : 
            {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${this.token}`
            },
            body : JSON.stringify(content)
        })
    }
    static async ApiPostDeleteId(id)
    {
        return fetch(`${this.baseUrl}/posts/${id}`,
        {
            method : "DELETE",
            headers : 
            {
                "Authorization" : `Bearer ${this.token}`
            }
        })
    }
}
export default ApiController