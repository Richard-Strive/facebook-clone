export default function (state = {}, action) {
  switch (action.type) {
    case "RECUGNIZE_USER":
      return {
        ...state,
        userID: action.payload,
      };

    default:
      return state;
  }
}
