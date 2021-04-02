export default function (state = {}, action) {
  switch (action.type) {
    case "SEL_USER":
      return {
        ...state,
        user_obj: action.payload,
      };
    default:
      return state;
  }
}
