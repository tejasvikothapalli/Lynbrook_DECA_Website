importScripts("https://www.gstatic.com/firebasejs/3.6.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.6.2/firebase-messaging.js");

var config = {
	    apiKey: "AIzaSyBdf755F2RHw5-IUsMR1rYUyCGvpdvKSOk",
	    authDomain: "lynbrook-deca.firebaseapp.com",
	    databaseURL: "https://lynbrook-deca.firebaseio.com",
	    storageBucket: "lynbrook-deca.appspot.com",
	    messagingSenderId: "105997057044"
	  };

	  firebase.initializeApp(config);

const messaging = firebase.messaging();