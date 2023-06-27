
// configuração do firebase
const firebaseConfig = {
    apiKey: "AIzaSyDwmViBzQcjkwQ8a9ptPDAMR8S_h6iCj2c",
    authDomain: "projeto-2-teste-c9255.firebaseapp.com",
    databaseURL: "https://projeto-2-teste-c9255-default-rtdb.firebaseio.com",
    projectId: "projeto-2-teste-c9255",
    storageBucket: "projeto-2-teste-c9255.appspot.com",
    messagingSenderId: "816498809934",
    appId: "1:816498809934:web:0efad504341804346a371f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function cadastrar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("seus dados foi cadastrado com sucesso");
            auth = user;
            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            alert("falhar ao cadastrar");
        });
}

function logar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("seus dados foi cadastrado com sucesso");
            auth = user;
            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            alert("falhar ao cadastrar");
        });
}
