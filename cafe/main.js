const firebaseConfig = {
  apiKey: "AIzaSyDSAEHHPVrZH3kQmO1v3L7k6KJlDQQr12g",
  authDomain: "cafe-93660.firebaseapp.com",
  databaseURL: "https://cafe-93660-default-rtdb.firebaseio.com",
  projectId: "cafe-93660",
  storageBucket: "cafe-93660.appspot.com",
  messagingSenderId: "119931302990",
  appId: "1:119931302990:web:ff1626715621da44087f1f"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var CafeDB = firebase.database().ref("Cafe");

document.getElementById("Cafe").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = getElementVal("name");
  const emailid = getElementVal("emailid");
  const msgContent = getElementVal("msgContent");
  
  saveMessages(name, emailid, msgContent);

  //enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
 document.querySelector(".alert").style.display = "none";
 }, 3000);

  //   reset the form
 document.getElementById("cafe").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newCafe = CafeDB.push();

  newCafe.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};