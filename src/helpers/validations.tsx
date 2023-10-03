const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const usernameCheck = (username: string) => {
  return usernameRegex.test(username);
};

export const emailCheck = (email: string) => {
  return emailRegex.test(email);
};
