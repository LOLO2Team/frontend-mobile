const initialState = {
  parkingOrders: [
    { orderId: 0, vehicleNumber: "init", orderStatus:"pending" },
    { orderId: 1, vehicleNumber: "car1", orderStatus:"pending" },
    { orderId: 2, vehicleNumber: "car2", orderStatus:"pending" },
    { orderId: 3, vehicleNumber: "car3", orderStatus:"pending" }
  ],
  parkingLots: [
    {lotId: 0, lotName: "Sheung Wan Parking Lot"},
    {lotId: 1, lotName: "Central Parking Lot"},
    {lotId: 2, lotName: "HH Parking Lot"}
  ],
  orderId: 0,
  parkingLot: "Sheung Wan Parking Lot",
  content: "Orders",
  selectedTab: "OrdersTab"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_RENDER_CONTENT":
      return { 
        ...state,
        content: payload
      }

    case "SET_BOTTOM_NAV":
      return {
        ...state,
        selectedTab: payload
      }

    case "SET_PARKING_ORDER":
      return {
        ...state,
        orderId: payload
      }

    case "SET_PARKING_LOT":
      return {
        ...state,
        parkingLot: payload
      }

    case "GET_ORDERS":{
      return{
        ...state,
        parkingOrders: payload
      }
    }

    default:
      return state
  }
}
