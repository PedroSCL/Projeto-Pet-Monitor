// export default dataa;

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
// email = document.getElementById("email").value;
// senha = document.getElementById("senha").value;

async function logar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 

    url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwmViBzQcjkwQ8a9ptPDAMR8S_h6iCj2c";
    // url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDwmViBzQcjkwQ8a9ptPDAMR8S_h6iCj2c"

    // response = await JSON.stringify({
    //     'email': document.getElementById("email").value,
    //     'password': document.getElementById("senha").value,
    //     'returnSecureToken': true,
    // });
    //console.log(response);
    //console.log(body);
    response = new Request(url, {
        method: 'POST',
        body: JSON.stringify({
            'email': document.getElementById("email").value,
            'password': document.getElementById("senha").value,
            'returnSecureToken': true,
        }
        ),

        // body: data,
    });
    var dataa;

    await fetch(response)
        .then(res => res.json()).then(data => dataa = data
        );
    console.log('antes');
    console.log(dataa);
    console.log('depois');
    console.log(dataa['localId']);
    //document.getElementById("userId").innerHTML = 'test';




    //dataa = JSON.parse(response);
    //body = JSON.parse(response);
    //console.log(body['idToken']);
    //console.log(response.body['localId']);

    // let data = {
    //     // name: "cu",
    //     email: {
    //         email: 'email',
    //         cpf: 'cpf',
    //     }
    // };

    // const url2 = 'https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/teste/.json';

    // request = new Request(url2, {
    //     method: 'POST',
    //     // method: 'PATCH',
    //     body: JSON.stringify(data),
    //     // body: data,
    //     headers: new Headers(),

    // });
    // await fetch(request)
    //     .then(res => res.json()).then(data => console.log(data)
    //     )


    await firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            //alert("seus dados foi cadastrado com sucesso");
            auth = user;
            //console.log(user.body)
            // console.log(user.Token)
            // console.log(user.token)
            // console.log(user.localId)
            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            //alert("falhar ao cadastrar");
        });
    //window.location.href = "pag-cadas-usuario/index.html";
    window.location.href = "variaveis.html";
}
//export default dataa;
//export let myVariable = dataa;
// export { dataa as default };
