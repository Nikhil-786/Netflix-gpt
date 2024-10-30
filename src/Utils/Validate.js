const Validate = (email, password) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordVaild =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Email is not vaild";
  if (!isPasswordVaild) return "Password is not vaild";

  return null;
};

export default Validate;
