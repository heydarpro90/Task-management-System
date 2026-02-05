// THIS FILE IS used TO MANAGE BUSINESS 
// THIS FILE IS USED TO MAGE DATA SUCH AS CREATE UPDATE DELETE 

class User {

    constructor(){
        this.users = this.getUsers() || [];
    }

    saveUser(userData){
        const newUser ={
            id : Date.now(),
            ...userData
        } 

        this.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(this.users))

        // return window,location.href = "../signin.html";
        return {
            success: true,
        };

    }

    signInUser(usernameByInput){
            // user data checking process username in local storage 
                const userExist = this.users.some(user => 
                    user.username?.toLowerCase() === usernameByInput.toLowerCase()
                );   

            if(userExist){
                //user found sign.js controller
                return {
                success: true,
                username,
             };
                } 
                else{
                    return{
                        success: false,
                        message: "User not found",
                    }
            }
        
    }



    
    getUsers(){
        
        return JSON.parse(localStorage.getItem("users")) || [];
    }

}   








  