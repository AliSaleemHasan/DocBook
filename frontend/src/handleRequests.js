const appUrl = "http://localhost:4000";

const requests = {
  signUpAsPatient: async (
    email,
    password,
    password_confirmation,
    full_name
  ) => {
    const response = await fetch(appUrl + "/auth/pt/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation,
        full_name,
      }),
    });
    return response.json();
  },
  login: async (email, password) => {
    const response = await fetch(appUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },
};

export default requests;
