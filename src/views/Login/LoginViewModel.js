const validateEmail = (email) => { // Declara una función llamada validateEmail que recibe un parámetro de correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Retorna verdadero si el correo electrónico es válido según la expresión regular
  }
  
  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);//igual que en el correo
  };
  
  export { validateEmail, validatePassword }; // Exporta las funciones de validación de correo electrónico y contraseña
  