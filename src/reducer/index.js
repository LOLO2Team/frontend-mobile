const initialState = {
  parkingOrders: [{ orderId: 1, carId: "car1" },
  { orderId: 2, carId: "car2" },
  { orderId: 3, carId: "car3" }]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "GET_PARKING_ORDERS":
    return { 
      ...state
    }

  default:
    return state
  }
}
