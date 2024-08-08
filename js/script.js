
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCeQBt6izwfAf1_d2CKmDdmbrrfIJTL1ds",
    authDomain: "mid-free-final.firebaseapp.com",
    projectId: "mid-free-final",
    storageBucket: "mid-free-final.appspot.com",
    messagingSenderId: "673814398090",
    appId: "1:673814398090:web:131e5084ba7fc7cc131973",
    measurementId: "G-XXW8H07DLQ"
  };


  const app = initializeApp(firebaseConfig);




  const db=getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){

        set(ref(db,'user/'+document.getElementById("username").value),
        {
                username:document.getElementById("username").value,
                email:document.getElementById("email").value,
                PhoneNumber:document.getElementById("phone").value
        })
        alert("Login Sucessful !")
  })
