// auth.js

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlY1s_OQKLGFJaZSyDJzKIoX3WnFGSq58",
  authDomain: "intranetcomfrio.firebaseapp.com",
  projectId: "intranetcomfrio",
  storageBucket: "intranetcomfrio.appspot.com",
  messagingSenderId: "347790318348",
  appId: "1:347790318348:web:901f10beadae6981e40729"
};

firebase.initializeApp(firebaseConfig);

// Função de verificação de autenticação
function checkAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      // Usuário não autenticado
      window.location.href = 'index.html';
    } else {
      // Autenticado, exibe conteúdo
      document.body.style.display = 'block';

      // Se os elementos existirem, exibe nome de usuário e botão de logout
      const loginDropdown = document.getElementById("loginDropdown");
      const sairBtn = document.getElementById("sairBtn");

      if (loginDropdown) {
        loginDropdown.innerHTML = `Login: ${user.displayName || 'Usuário'} <i class="fas fa-cog"></i>`;
      }
      if (sairBtn) {
        sairBtn.style.display = 'block';
        sairBtn.addEventListener("click", function () {
          firebase.auth().signOut().then(function () {
            window.location.href = 'index.html';
          }).catch(function(error) {
            console.error("Erro ao sair: ", error);
          });
        });
      }
    }
  });
}
