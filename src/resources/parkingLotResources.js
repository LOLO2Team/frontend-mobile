export default {
    getParkingLotByEmployee: (token) => {
        return fetch("https://parking-lot-backend.herokuapp.com/parkinglots?employeeId=0", {
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