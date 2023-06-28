
let loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", evento => {
    evento.preventDefault();
    // const formData = new FormData(loginForm);
    // const data = Object.fromEntries(loginForm);

    //console.log(data);
    const url = 'https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/.json';


    let idade = document.getElementById("idade").value;
    console.log(idade);
    let peso = document.getElementById("peso").value;
    console.log(peso);
    let comprimento = document.getElementById("comprimento").value;
    console.log(comprimento);
    let cor_primaria = document.getElementById("cor-primaria").value;
    console.log(cor_primaria);
    let nome = document.getElementById("nome").value;
    console.log(nome);
    let comportamento = document.getElementById("comportamento").value;
    console.log(comportamento);

    let data = {
        dono: {

        },
        pet: {
            idade: idade,
            peso: peso,
            comprimento: comprimento,
            cor_primaria: cor_primaria,
            nome: nome,
            comportamento: comportamento,
        }

    }

    var request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers()
    });

    fetch(request)
        .then(res => res.json()).then(data => console.log(data)
        )
});