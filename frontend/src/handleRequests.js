const appUrl = "http://localhost:4000";

const requests = {
  signUpAsPatient: async (
    email,
    password,
    password_confirmation,
    full_name
  ) => {
    const response = await fetch("/auth/pt/signup", {
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
  signUpAsDoctor: async (
    email,
    password,
    password_confirmation,
    full_name,
    specialties
  ) => {
    const response = await fetch("/auth/dr/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation,
        full_name,
        fields: {
          specialties: specialties,
        },
      }),
    });
    return response.json();
  },
  login: async (email, password) => {
    const response = await fetch("/auth/login", {
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
