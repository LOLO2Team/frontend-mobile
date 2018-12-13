export default {
    getEmployeeById: (token, id) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/parkingboys/" + id, {
            //getInitData: fetch("http://localhost:8081/orders", 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            mode: 'cors',
            method: 'GET'
            })
    },
    getEmployeeByName: (token, name) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/employees?username=" + name, {
            //getInitData: fetch("http://localhost:8081/orders", 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            mode: 'cors',
            method: 'GET'
            })
    },
    setEmployeeStatus: (token, id, status) => {
        return fetch("https://parking-lot-backend.herokuapp.com/parkingboys/" + id + "/status/" + status, {
            //getInitData: fetch("http://localhost:8081/orders", {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            mode: 'cors',
            method: 'PUT'
        })
    }
}