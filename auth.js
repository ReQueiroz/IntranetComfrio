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
  
  // Verificar o estado de autenticação
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Se estiver autenticado, exibe o nome do usuário e a opção de logout
      document.getElementById("loginDropdown").innerHTML = `Login: ${user.displayName || 'Usuário'} <i class="fas fa-cog"></i>`;
      document.getElementById("sairBtn").style.display = 'block';
    } else {
      // Se não estiver autenticado, exibe apenas a opção de login
      document.getElementById("loginDropdown").innerHTML = `Login: ADMIN <i class="fas fa-cog"></i>`;
      document.getElementById("sairBtn").style.display = 'none';
    }
  });
  
  // Ação de logout
  document.getElementById("sairBtn").addEventListener("click", function () {
    firebase.auth().signOut().then(function () {
      window.location.href = 'index.html';  // Redireciona para a página de login
    }).catch(function(error) {
      console.error("Erro ao sair: ", error);
    });
  });