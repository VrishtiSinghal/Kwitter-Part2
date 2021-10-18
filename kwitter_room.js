const firebaseConfig = {
      apiKey: "AIzaSyCsXcEWfm7JYz3gHKp1JH_QToGSm1owt8I",
      authDomain: "kwit-61912.firebaseapp.com",
      databaseURL: "https://kwit-61912-default-rtdb.firebaseio.com",
      projectId: "kwit-61912",
      storageBucket: "kwit-61912.appspot.com",
      messagingSenderId: "224350511743",
      appId: "1:224350511743:web:1822ea6c39664aacc2d54a"
    };    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logOut(){
      window.location="index.html";
}