export default {
    getParkingLotByEmployee: (token, id) => {
        return fetch("https://parking-lot-backend.herokuapp.com/parkinglots?employeeId=" + id, {
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