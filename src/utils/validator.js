export function validateEmail(email) {
  const regex = /^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$/;
  return regex.test(email);
  }