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
    getOrderWithEmployee: (token) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/parkinglots?employeeId=0", {
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
    grabOrderWithId: (order, token) => {
        return  fetch("https://parking-lot-backend.herokuapp.com/orders/" + order.orderId + "/employeeId/0", {
                //fetch("http://localhost:8081/orders/" + order.orderId + "/employeeId/0",{
                mode: 'cors',
                method: 'PUT',
                body: JSON.stringify({
                    "content": order.orderId,
                    "vehicleNumber": order.vehicleNumber,
                    "orderStatus": "parking",
                    "employeeId": 0
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