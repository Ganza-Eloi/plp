exports.handler = async () => {
  return {
    statusCode: 403,
    body: JSON.stringify({
      success: false,
      message: "Reset password is disabled. Use the allowed login credentials.",
    }),
  };
};
