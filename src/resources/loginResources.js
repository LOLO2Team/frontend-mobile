export default {
    login: (name, password) =>{
        const identity ={username: name ,password: password};
        return fetch("https://parking-lot-backend.herokuapp.com/login",{
                mode: 'cors',
                method: 'POST', 
                body: JSON.stringify(identity),
                headers: new Headers({ 'Content-Type': 'application/json'})
        })
    },
}