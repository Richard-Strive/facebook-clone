// function to register user
export default function (data) {
  return {
    type: USER,
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
