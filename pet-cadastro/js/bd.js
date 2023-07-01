//import {dataa} from '../../firebase.js';
const { dataa } = require('../../firebase.js');

let loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", evento => {
    evento.preventDefault();
    // const formData = new FormData(loginForm);
    // const data = Object.fromEntries(loginForm);

    //console.log(data);
    // const url = 'https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/.json?auth=KBEH3eEdZNflAwEKNvftlyoDuDh2';
    //var emailbd = email;



    let email = document.getElementById("email").value;
    console.log(email);
    let cpf = document.getElementById("cpf").value;
    console.log(cpf);
    let tel = document.getElementById("tel").value;
    console.log(tel);
    let endereco = document.getElementById("endereco").value;
    console.log(endereco);
    let nome = document.getElementById("nome").value;
    console.log(nome);
    const url = 'https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/teste/.json';


    // let idade = document.getElementById("idade").value;
    // console.log(idade);
    // let peso = document.getElementById("peso").value;
    // console.log(peso);
    // let comprimento = document.getElementById("comprimento").value;
    // console.log(comprimento);
    // let cor_primaria = document.getElementById("cor-primaria").value;
    // console.log(cor_primaria);
    // let nome_pet = document.getElementById("nome-pet").value;
    // console.log(nome_pet);
    // let comportamento = document.getElementById("comportamento").value;
    // console.log(comportamento);

    let data = {
        // name: "cu",
        email: {
            email: email,
            cpf: cpf,
            tel: tel,
            endereco: endereco,
            nome: nome,
        },
        // dono: {
        //     email: 'email',
        //     cpf: 'cpf',
        //     tel: 'tel',
        //     endereco: 'endereco',
        //     nome: 'nome',
        // },
        // pet: {
        //     idade: idade,
        //     peso: peso,
        //     comprimento: comprimento,
        //     cor_primaria: cor_primaria,
        //     nome_pet: nome_pet,
        //     comportamento: comportamento,
        // }

    };

    // var obj = {
    //     dono: {
    //         email: email,
    //         cpf: cpf,
    //         tel: tel,
    //         endereco: endereco,
    //         nome: nome,
    //     },
    //     pet: {
    //         idade: idade,
    //         peso: peso,
    //         comprimento: comprimento,
    //         cor_primaria: cor_primaria,
    //         nome_pet: nome_pet,
    //         comportamento: comportamento,
    //     }
    // };


    request = new Request(url, {
        method: 'POST',
        // method: 'PATCH',
        body: JSON.stringify(data),
        // body: data,
        headers: new Headers(),

    });
    // console.log(request);
    // request.body.locked = false;
    // resposta = JSON.parse(request.body);
    // console.log(resposta);

    // var request = new XMLHttpRequest();
    // request.open("POST", url, true, 'teste', 'queisso');
    // request.setRequestHeader('Content-Type', 'application/json');
    // request.send(JSON.stringify(data));

    fetch(request)
        .then(res => res.json()).then(data => console.log(data)
        )
    console.log(dataa['localId']);
});