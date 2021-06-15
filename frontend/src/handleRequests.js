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
    specialties,
    location
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
          location,
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
  logout: async () => {
    const response = await fetch("/auth/logout", {
      method: "GET",
    });
    return response.json();
  },
};

export default requests;
