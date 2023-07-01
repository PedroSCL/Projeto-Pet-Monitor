const firebaseConfig = {
    apiKey: "AIzaSyDwmViBzQcjkwQ8a9ptPDAMR8S_h6iCj2c",
    authDomain: "projeto-2-teste-c9255.firebaseapp.com",
    databaseURL: "https://projeto-2-teste-c9255-default-rtdb.firebaseio.com",
    projectId: "projeto-2-teste-c9255",
    storageBucket: "projeto-2-teste-c9255.appspot.com",
    messagingSenderId: "816498809934",
    appId: "1:816498809934:web:0efad504341804346a371f"
};

firebase.initializeApp(firebaseConfig);
//const database = getDatabase(app);

var ref = firebase.database().ref('/dono/email');
//var email = firebase.database().refFromURL(ref);
//var email = ref.get().then()//get é uma promisse??
//email = firebase.database().get()
//var email = firebase.database().refFromURL(path);
//var email = firebase.database().ref('/dono/');
/*var cliente = JSON.parseURI(firebase.database().ref('/dono.json'));
var dsad = JSON.parse()
var email = cliente.email;*/
//https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/dono/email
const USUARIO = [
    {
        email: "robertin02@gmail.com",
        nome: "Roberto",
        telefone: "61912345678"
    },
];

const PET = [
    {
        nome_pet: "James",
        peso: "50",
        raca: "Golden Retrivier"
    },
];

document.getElementById("email").innerHTML = USUARIO.at(0).email;
document.getElementById("nome_usuario").innerHTML = USUARIO.at(0).nome;
document.getElementById("telefone").innerHTML = USUARIO.at(0).telefone;

document.getElementById("peso").innerHTML = PET.at(0).peso + "kg";
document.getElementById("nome_pet").innerHTML = PET.at(0).nome_pet;
document.getElementById("raca").innerHTML = PET.at(0).raca;


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

/*
const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let result = data.results;
  return result.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});*/

const url = 'https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/dono.json';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data);
        email = data;
        document.getElementById("email").innerHTML = data.email;
        document.getElementById("nome_usuario").innerHTML = data.nome;
        document.getElementById("telefone").innerHTML = data.telefone;
        let result = data.results;
        return result.map(function (author) {
            let li = createNode('li');
            let img = createNode('img');
            let span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
            document.getElementById("email").innerHTML = data;
            document.getElementById("nome_usuario").innerHTML = data;
            document.getElementById("telefone").innerHTML = data;
        })
    })
    .catch(function (error) {
        console.log(error);
    });


