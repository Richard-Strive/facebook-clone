export const getUser = async (tk, setLoading, dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/user/me", {
      method: "GET",
      headers: new Headers({
        Authorization: tk,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch({ type: "USER", payload: data });

      if (setLoading) {
        setLoading(false);
      }
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};

export const getMessages = async (tk, setMessages) => {
  try {
    const response = await fetch("http://localhost:5000/user/me/messages", {
      method: "GET",
      headers: new Headers({
        Authorization: tk,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      if (setMessages) {
        setMessages(data);
      }
    }
  } catch (err) {
    console.log("there is an error", err);
  }
};
