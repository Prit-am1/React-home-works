export const validateEmail = (email) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  };
  
  export const validatePhone = (phone) => {
    const reg = /^[0-9]{10}$/;
    return reg.test(phone);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  