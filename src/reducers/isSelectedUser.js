export default function (state = {}, action) {
  switch (action.type) {
    case "SET_IS_SEL":
      return action.payload;
    default:
      return state;
  }
}
