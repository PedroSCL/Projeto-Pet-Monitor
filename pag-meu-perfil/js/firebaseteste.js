
var email = firebase.database().ref('/dono/email');

function testo() {
    no = firebase.database().ref().child('teste').push().key;
    alert('Sucesso ✔');
}