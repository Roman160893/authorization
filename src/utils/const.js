export const userEmail = (JSON.parse(localStorage.getItem('email'))) || null;
export const userPassword = (JSON.parse(localStorage.getItem('password'))) || null;
export const remember = JSON.parse(localStorage.getItem('remember')) || null;