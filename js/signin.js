// this file will be used form hundler

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager =  new User();
    
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usernameByInput= document.getElementById('username').value;
        
        const result = userManager.signInUser(usernameByInput);

        if(result.success){
            //active user /  current user
            localStorage.setItem("usernameLoggedIn", usernameByInput)
            // alert("You have successfully signed in!");
        return window.location.href = "../tasks.html";

        }else{
           alert("User not found");
        }
    })

})
