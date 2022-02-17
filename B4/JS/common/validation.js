export const checkEmail = (email) => {
  if (!email || email.length === 0) {
    return "Email is inquire";
  }
  const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  if (!regex.test(email)) {
    return "Email is invalid";
  }
  return null;
};

export const checkPassword = (password) => {
  if (!password || password.length === 0) {
    return "password is invalid";
  }
  if (password.length < 8 || password.length > 16) {
    return "password is 8 to 16 character";
  }
  return null;
};
