const initialState = {
  parkingOrders: [
    // { orderId: 0, vehicleNumber: "init", orderStatus:"pending" },
    // { orderId: 1, vehicleNumber: "car1", orderStatus:"pending" },
    // { orderId: 2, vehicleNumber: "car2", orderStatus:"pending" },
    // { orderId: 3, vehicleNumber: "car3", orderStatus:"pending" }
  ],
  employee:[],
  parkingLots: [],
  orderId: 0,
  parkingLotId: 0,
  content: "Login",
  selectedTab: "OrdersTab",
  parkingLotName: '',
  header: "Parking!",
  error: "loading",
  token: "",
  user: "",
  order:""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "GET_EMPLOYEE_BY_ID":
      return{
        ...state,
        employee: payload
      }

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
    
    case "SET_HEADER":
      return {
        ...state,
        header: payload
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

    case "SET_FETCH_PARKING_LOT": 
      return {
        ...state,
        parkingLotName: state.parkingLots.find((parkingLot) => parkingLot.id === payload).label
      }

    case "SET_PARKING_LOT_ID":
      return {
        ...state,
        parkingLotId: payload
      }

    case "GET_ORDERS":
      return{
        ...state,
        parkingOrders: payload
      }

    case "GET_FETCHING_ORDERS":
      return {
        ...state,
        parkingOrders: state.parkingOrders.concat(payload)
      }

    case "SET_ERROR":
      return {
        ...state,
        error: payload
      }

    case "SET_TOKEN":
      return {
        ...state,
        token: payload
      }

    case "SET_USER":
      return{
        ...state,
        user: payload
      }

    default:
      return state
  }
}
