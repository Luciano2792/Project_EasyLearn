  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0IoYI_jy2ug7gWujawwKGQ6XORiQc-L8",
    authDomain: "chat-c300b.firebaseapp.com",
    databaseURL: "https://chat-c300b.firebaseio.com",
    projectId: "chat-c300b",
    storageBucket: "chat-c300b.appspot.com",
    messagingSenderId: "487354274980"
  };
  firebase.initializeApp(config);

  const database = firebase.database();