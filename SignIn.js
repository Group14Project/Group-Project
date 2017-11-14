(function(){
//Initialize Firebase	
var config = {
    apiKey: "AIzaSyAI4RD9LoiAism8TuzwmpYRNSMaeGwBwV8",
    authDomain: "dishedout-99414.firebaseapp.com",
    databaseURL: "https://dishedout-99414.firebaseio.com",
    projectId: "dishedout-99414",
    storageBucket: "dishedout-99414.appspot.com",
    messagingSenderId: "949450220295"
  };
  firebase.initializeApp(config);
  
  //Get Elements
  var entEmail = document.getElementById('entEmail');
  var entPassword = document.getElementById('entPassword');
  var enterEmail = document.getElementById('enterEmail');
  var enterPassword = document.getElementById('enterPassword');
  var entfirstName = document.getElementById('entfirstName');
  var entsurName = document.getElementById('entsurName');
   var enterEmail1 = document.getElementById('enterEmail1');
  var btnSignIn = document.getElementById('btnSignIn');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogOut = document.getElementById('btnLogOut');
  
  //add Login event
  btnSignIn.addEventListener('click', e => {
	  //Get Email and Password
	  var email = entEmail.value;
	  var pass = entPassword.value;
	  var auth = firebase.auth();
	  
	  //SignIn
	  var promise = auth.signInWithEmailAndPassword(email, pass); 
	  promise.catch(e => console.log(e.message));
  });
  
  //add SignUp event
  btnSignUp.addEventListener('click', e => {
	   //Get Email and Password
	  var email1 = enterEmail.value;
	  var pass1 = enterPassword.value;
	  var auth = firebase.auth();
	  
	  //SignUp
	  var promise = auth.createUserWithEmailAndPassword(email1, pass1); 
	  promise
	  .catch(e => console.log(e.message));
  });
  
     btnLogOut.addEventListener('click', e => {
		 firebase.auth().signOut();
	 });
  
	  firebase.auth().onAuthStateChanged(firebaseUser => {
		  if(firebaseUser){
			  console.log('Logged In');
			  console.log(firebaseUser);
			  btnLogOut.style.display = 'block';
			  
	 
		  }else{
			  console.log('Logged Out');
			  btnLogOut.style.display = 'none'; 	
		  }
	   });
	   
	   btnReset.addEventListener('click', e => {
          var email2 = enterEmail1.value;
		  var auth = firebase.auth();

          var promise = auth.sendPasswordResetEmail(email2);
		  promise
	  .catch(e => console.log(e.message));
  });
		  
			  
}());
 function showDiv(){
   document.getElementById('container2').style.display = "block";
    document.getElementById('container').style.display = "none";
}
function showDiv1(){
   document.getElementById('container3').style.display = "block";
    document.getElementById('container').style.display = "none";
}
