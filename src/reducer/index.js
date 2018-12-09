const initialState = {
  parkingOrders: [
    { orderId: 0, carId: "init" },
    { orderId: 1, carId: "car1" },
    { orderId: 2, carId: "car2" },
    { orderId: 3, carId: "car3" }
  ],
  parkingLots: [
    {lotId: 1, lotName: "Sheung Wan Parking Lot"},
    {lotId: 2, lotName: "Central Parking Lot"},
    {lotId: 3, lotName: "HH Parking Lot"}
  ],
  orderId: 0,
  content: "Orders"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_RENDER_CONTENT":
      return { 
        ...state,
        content: payload
      }

    case "GET_PARKING_LOTS":
    return {
      ...state
    }

    default:
      return state
  }
}
