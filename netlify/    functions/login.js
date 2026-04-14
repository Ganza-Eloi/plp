exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const users = [
    { name: "Ganza Eloi", email: "plpurugwiro@gmail.com", password: "urugwiro" }
  ];

  try {
    const { email, password } = JSON.parse(event.body);

    if (!email || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: "Email and password are required." }),
      };
    }

    const normalizedEmail = email.toLowerCase();
    const user = users.find((item) => item.email === normalizedEmail);

    if (!user || user.password !== password) {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Invalid login credentials." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: `Login successful. Welcome back, ${user.name}!`,
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error" }),
    };
  }
};
