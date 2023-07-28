
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = { 
  apiKey: "AIzaSyDqId4WhVkD74RwIGhAmBghCOCRnfrB5CY", 
  authDomain: "vamosconversar-3e58b.firebaseapp.com", 
  databaseURL: "https://vamosconversar-3e58b-default-rtdb.firebaseio.com", 
  projectId: "vamosconversar-3e58b", 
  storageBucket: "vamosconversar-3e58b.appspot.com", 
  messagingSenderId: "202403704538", 
  appId: "1:202403704538:web:0e93a6111713ea23b83fe3" };

firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
