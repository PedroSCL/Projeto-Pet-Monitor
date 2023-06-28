function mandar() {

    const url = 'https://projeto-2-teste-c9255-default-rtdb.firebaseio.com/dono';

    let data = {
        email: "gustavin@gmail.com",
        nome: "Gustavo",
        telefone: "61987654321"
    }

    var request = new Request(url, {
        method: 'POST',
        body: data,
        headers: new Headers()
    });

    fetch(request)
        .then(function () {
            // Handle response we get from the API
            console.log('ahhhhhhhhhhhhhhh');
        })
}

// let loginForm = document.getElementById('loginForm');

// loginForm.addEventListener("submit", evento => {
//     evento.preventDefault();
//    const formData = new FormData(loginForm);
//    const data = Object.fromEntries(formData);
   
//    console.log(data);
// });