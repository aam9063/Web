document.addEventListener('DOMContentLoaded', () => {
  const openLoginFormBtn = document.getElementById('openLoginFormBtn');
  const loginPopup = document.getElementById('loginPopup');
  const closeLoginFormBtn = document.getElementById('closeLoginFormBtn');
  const loginForm = document.getElementById('loginForm');
  const logoutLink = document.getElementById('logoutLink');
  const mensajeContrasena = document.getElementById('mensajeContrasena');

  openLoginFormBtn.addEventListener('click', () => {
    loginPopup.style.display = 'block';
  });

  closeLoginFormBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (esContrasenaSegura(password)) {
      document.cookie = `usuario=${username}; path=/`;
      localStorage.setItem('usuario', username);
      loginPopup.style.display = 'none';
      mensajeContrasena.textContent = "Bienvenidos de nuevo, " + username;
      mensajeContrasena.style.color = "green";
      openLoginFormBtn.textContent = "Hola, " + username;
    } else {
      let intentos = parseInt(getCookie('intentos')) || 0;
      intentos++;
      document.cookie = `intentos=${intentos}; path=/`;
      mensajeContrasena.textContent = `La contraseña no es segura. Intentos: ${intentos}`;
      mensajeContrasena.style.color = "red";
    }
  });

  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem('usuario');
    document.cookie = "intentos=0; path=/";
    mensajeContrasena.textContent = "Has cerrado sesión.";
    mensajeContrasena.style.color = "blue";
    openLoginFormBtn.textContent = "Iniciar Sesión";
  });

  const usuario = getCookie('usuario');
  if (usuario) {
    mensajeContrasena.textContent = "Bienvenidos de nuevo, " + usuario;
    mensajeContrasena.style.color = "green";
    openLoginFormBtn.textContent = "Hola, " + usuario;
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  function esContrasenaSegura(password) {
    return (
      tieneLongitudAdecuada(password) &&
      tieneMayuscula(password) &&
      tieneMinuscula(password) &&
      tieneNumero(password) &&
      tieneCaracterEspecial(password)
    );
  }

  function tieneLongitudAdecuada(password) {
    return password.length >= 8 && password.length <= 16;
  }

  function tieneMayuscula(password) {
    return /[A-Z]/.test(password);
  }

  function tieneMinuscula(password) {
    return /[a-z]/.test(password);
  }

  function tieneNumero(password) {
    return /[0-9]/.test(password);
  }

  function tieneCaracterEspecial(password) {
    return /[-_@#$%&]/.test(password);
  }
});