const initialState = {
  parkingOrders: [
    { orderId: 0, vehicleNumber: "init", orderStatus:"pending" },
    { orderId: 1, vehicleNumber: "car1", orderStatus:"pending" },
    { orderId: 2, vehicleNumber: "car2", orderStatus:"pending" },
    { orderId: 3, vehicleNumber: "car3", orderStatus:"pending" }
  ],
  parkingLots: [],
  orderId: 0,
  parkingLotId: 0,
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

    case "SET_PARKING_LOTS":{
      return{
        ...state,
        parkingLots: payload.map((lot,index)=> {return {
          label: lot.parkingLotName,
          value: index,
          id: lot.parkingLotId
        }})
      }
    }

    case "SET_PARKING_LOT_ID":
      return {
        ...state,
        parkingLotId: payload
      }

    case "GET_ORDERS":{
      return{
        ...state,
        parkingOrders: payload
      }
    }

    case "GET_FETCHING_ORDERS":{
      return{
        ...state,
        parkingOrders: state.parkingOrders.concat(payload)
      }
    }

    default:
      return state
  }
}
