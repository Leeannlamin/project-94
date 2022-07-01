var firebaseConfig = {
      apiKey: "AIzaSyDQvLGjmVK4kwZh6cvnA4PB3ZQR9sEnIlM",
      authDomain: "kwitter-ffec4.firebaseapp.com",
      databaseURL: "https://kwitter-ffec4-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffec4",
      storageBucket: "kwitter-ffec4.appspot.com",
      messagingSenderId: "1094833988845",
      appId: "1:1094833988845:web:dac7903c70e606164e18e4"
    };
     firebase.initializeApp(firebaseConfig);
     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
