// function to register user
export default function (data) {
  return {
    type: USER,
    payload: data,
  };
}

// function to select a user
export default function (data) {
  return {
    type: SEL_USER,
    payload: data,
  };
}

// function to set array of connected users(socket.io)
export default function (data) {
  return {
    type: SET_CONNECTED_USERS,
    payload: data,
  };
}

// to change the boolean value
export default function (data) {
  return {
    type: SET_IS_SEL,
    payload: data,
  };
}

// function to recognize user
export default function (data) {
  return {
    type: RECOGNIZE_USER,
    payload: data,
  };
}

// resetting the display messages
export default function () {
  return {
    type: CLEAR_DISPLAY,
    payload: {},
  };
}
