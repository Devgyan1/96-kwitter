var firebaseConfig = {
      apiKey: "AIzaSyCZYwrQeZE0OcwctMKteqlfYdgC8Ssgu1w",
      authDomain: "kwitter-be0f7.firebaseapp.com",
      databaseURL: "https://kwitter-be0f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-be0f7",
      storageBucket: "kwitter-be0f7.appspot.com",
      messagingSenderId: "845892706009",
      appId: "1:845892706009:web:847215d6c35ed1021ee8c8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS


user=localStorage.getItem("user_name");
room=localStorage.getItem("roomName");

function send(){
      message= document.getElementById("msg").value;
      firebase.database().ref(room).push({
            name:user,
            message:message,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
