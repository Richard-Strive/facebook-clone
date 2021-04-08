export default function (state = {}, action) {
  switch (action.type) {
    case "SET_CONNECTED_USERS":
      return action.payload;
    default:
      return state;
  }
}
