import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyB3f6X2Bn6pyfPGy4Hr4MdtYVkqZNu8eFk",
  authDomain: "chat-app-70d02.firebaseapp.com",
  projectId: "chat-app-70d02",
  storageBucket: "chat-app-70d02.appspot.com",
  messagingSenderId: "1024507157310",
  appId: "1:1024507157310:web:f9977d8dbf733b58972a6f",
  measurementId: "G-EJ5QMC3CVE"
}
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

//
function GetAllUsers() {
  return firebase.database().ref("users")
}
function GetAllMessages(){
  return firebase.database().ref("messages")
}

function PushMessageToFirebase(msg, from,to) {
  firebase
    .database()
    .ref("messages")
    .push({
      "msg":msg,
      "from":from,
      "to":to
    });
}

function CreateNewUser(userName) {
  firebase
    .database()
    .ref("users")
    .push({
      "userName": userName,
    });
}


export {
  PushMessageToFirebase, CreateNewUser, GetAllUsers,GetAllMessages,
}
