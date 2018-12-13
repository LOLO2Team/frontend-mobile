export default {
    getAll: (token) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders/", {
                //getInitData: fetch("http://localhost:8081/orders", 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                }),
                mode: 'cors',
                method: 'GET'
                })
    },
    getOrderWithEmployee: (token, userId) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders?employeeId=" + userId, {
                //getInitData: fetch("http://localhost:8081/orders", 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                }),
                mode: 'cors', 
                method: 'GET'
                })
    },
    getOrderWithEmployeeAndStatus: (token, userId, status) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders?status=" + status + "&employeeId=" + userId, {
                //getInitData: fetch("http://localhost:8081/orders", 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                }),
                mode: 'cors', 
                method: 'GET'
                })
    },
    parkedOrder: (token, orderId, parkingLotId) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders/" + orderId + "/parkingLotId/" + parkingLotId, {
                mode: 'cors',
                method: 'PUT',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
                })
      })
    },
    grabOrderWithId: (order, token, userId) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders/" + order.orderId + "/employeeId/" + userId, {
                //fetch("http://localhost:8081/orders/" + order.orderId + "/employeeId/0",{
                mode: 'cors',
                method: 'PUT',
                body: JSON.stringify({
                    "content": order.orderId,
                    "vehicleNumber": order.vehicleNumber,
                    "orderStatus": "parking",
                    "employeeId": userId
                }),
                headers: new Headers({ 
                    'Content-Type': 'application/json',
                    'Authorization': token
                })
                })
    },
    finishOrder: (orderId, token) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders/" + orderId, {
                //getInitData: fetch("http://localhost:8081/orders", 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                }),
                mode: 'cors', 
                method: 'DELETE'    
                })
    },
    getFetchedOrder: (token) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders?status=fetched", {
                //getInitData: fetch("http://localhost:8081/orders", 
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
                }),
                mode: 'cors',
                method: 'GET'
            })
    }
}